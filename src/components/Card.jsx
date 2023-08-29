import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { flippedAtom, matchedAtom } from "../utils/atoms";
import { handleMatch, checkCards, isMatch, resetFlipped } from "../utils/game";

function Card({ cardItem, uniqueKey }) {
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatched] = useAtom(matchedAtom);
  const [active, setActive] = useAtom(flippedAtom);
  const matchedClass = matched.some((card) => card.id === cardItem.id)
    ? "mask mask-squircle"
    : "";

  const shadowClass =
    "shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]";

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
    if (active.flippedOne && uniqueKey === active.flippedOne.uniqueKey) {
      return;
    }
    if (active.flippedOne && active.flippedTwo) {
      return;
    }
    setFlipped(true);
    handleChoice(cardItem);
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
      <div className={`swap-off bg-accent rounded-xl ${shadowClass}`}>
        <img src="/presidents/back.png" className="rounded-xl" />
      </div>
      <div className="swap-on">
        <img
          src={cardItem.photo}
          className={`rounded-xl drop-shadow-xl ${matchedClass}`}
        />
      </div>
    </label>
  );
}

export default Card;
