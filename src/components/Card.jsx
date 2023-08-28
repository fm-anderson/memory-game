import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { flippedAtom, matchedAtom } from "../utils/atoms";
import { isCurrentFlipped, isMatch, resetFlipped } from "../utils/game";

function Card({ cardItem }) {
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatched] = useAtom(matchedAtom);
  const [active, setActive] = useAtom(flippedAtom);
  const cardClasses = matched.includes(cardItem) ? "mask mask-squircle" : "";

  useEffect(() => {
    if (active.flippedOne && active.flippedTwo) {
      if (isMatch(active)) {
        const matchTimer = setTimeout(() => {
          setMatched((prevState) => {
            if (prevState.some((card) => card.id === active.flippedOne.id)) {
              return prevState;
            }
            return [...prevState, active.flippedOne];
          });
          setActive({ flippedOne: "", flippedTwo: "" });
        }, 1000);

        return () => clearTimeout(matchTimer);
      } else {
        resetFlipped(setActive);
      }
    } else if (
      !isCurrentFlipped(cardItem, active) &&
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

  // mask mask-circle
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
