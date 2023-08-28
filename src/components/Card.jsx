import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { flippedAtom } from "../App";
import { isCurrentFlipped, isMismatched } from "../utils/helpers";

function Card({ cardItem }) {
  const [flipped, setFlipped] = useState(false);
  const [flippedCards, setFlippedCards] = useAtom(flippedAtom);

  useEffect(() => {
    if (isMismatched(flippedCards)) {
      const timer = setTimeout(() => {
        setFlippedCards({ flippedOne: "", flippedTwo: "" });
      }, 1000);

      return () => clearTimeout(timer);
    } else if (!isCurrentFlipped(cardItem, flippedCards)) {
      setFlipped(false);
    }
  }, [flippedCards, cardItem, setFlippedCards]);

  const handleFlip = () => {
    setFlipped(true);
    handleChoice(cardItem);
  };

  const handleChoice = (card) => {
    if (!flippedCards.flippedOne) {
      setFlippedCards((prevState) => ({ ...prevState, flippedOne: card }));
    } else {
      setFlippedCards((prevState) => ({ ...prevState, flippedTwo: card }));
    }
  };

  return (
    <label className="swap swap-flip">
      <input type="checkbox" checked={flipped} onChange={handleFlip} />
      <div className="swap-off bg-accent rounded-xl shadow-lg">
        <img src="/presidents/back.png" className="rounded-xl" />
      </div>
      <div className="swap-on">
        <img src={cardItem.photo} className="rounded-xl drop-shadow-lg" />
      </div>
    </label>
  );
}

export default Card;
