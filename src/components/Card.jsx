import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { flippedAtom, matchedAtom, turnsAtom } from "../utils/atoms";
import { handleMatch, checkCards, isMatch, resetFlipped } from "../utils/game";
import { shadowStiglitz } from "../utils/helpers";

function Card({ cardItem, uniqueKey, gameCompleted }) {
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatched] = useAtom(matchedAtom);
  const [active, setActive] = useAtom(flippedAtom);
  const [, setTurn] = useAtom(turnsAtom);

  const matchedClass = gameCompleted
    ? "mask mask-circle"
    : matched.some((card) => card.id === cardItem.id)
    ? "mask mask-squircle"
    : "";

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
      setTurn((prevState) => prevState + 1);
    }
  };

  return (
    <label className="swap swap-flip">
      <input type="checkbox" checked={flipped} onChange={handleFlip} />
      <div className={`swap-off rounded-xl bg-accent ${shadowStiglitz}`}>
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
