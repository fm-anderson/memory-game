import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { flippedAtom, matchedAtom } from "../utils/atoms";
import { handleMatch, checkCards, isMatch, resetFlipped } from "../utils/game";

function Card({ cardItem }) {
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatched] = useAtom(matchedAtom);
  const [active, setActive] = useAtom(flippedAtom);
  const cardClasses = matched.includes(cardItem) ? "mask mask-squircle" : "";

  useEffect(() => {
    if (active.flippedOne && active.flippedTwo) {
      if (isMatch(active)) {
        handleMatch(active, setMatched, setActive);
      } else {
        resetFlipped(setActive);
      }
    } else if (
      !checkCards(cardItem, active) &&
      !matched.some((matchedCard) => matchedCard.id === cardItem.id)
    ) {
      setFlipped(false);
    }
  }, [active, cardItem, setActive]);

  const handleFlip = () => {
    if (active.flippedOne && active.flippedTwo) {
      return;
    }
    setFlipped(true);
    handleChoice(cardItem);
    console.log(matched);
  };

  const handleChoice = (card) => {
    if (!active.flippedOne) {
      setActive((prevState) => ({ ...prevState, flippedOne: card }));
    } else {
      setActive((prevState) => ({ ...prevState, flippedTwo: card }));
    }
  };

  return (
    <label className="swap swap-flip">
      <input type="checkbox" checked={flipped} onChange={handleFlip} />
      <div className="swap-off bg-accent rounded-xl shadow-lg">
        <img src="/presidents/back.png" className="rounded-xl" />
      </div>
      <div className="swap-on">
        <img
          src={cardItem.photo}
          className={`rounded-xl drop-shadow-lg ${cardClasses}`}
        />
      </div>
    </label>
  );
}

export default Card;
