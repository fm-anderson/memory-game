import { useEffect } from "react";
import { useAtom } from "jotai";
import JSConfetti from "js-confetti";
import { completedAtom, matchedAtom } from "../utils/atoms";
import Card from "./Card";

function Game({ cards }) {
  const [gameCompleted, setGameCompleted] = useAtom(completedAtom);
  const [matched] = useAtom(matchedAtom);
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    if (matched.length === cards.length / 2) {
      setGameCompleted(true);
      jsConfetti.addConfetti();
    }
  }, [matched, cards]);

  return (
    <div className="m-4 grid max-w-screen-lg grid-cols-4 gap-2 md:mx-4 md:grid-cols-6 md:gap-4">
      {cards.map((cardItem) => {
        return (
          <Card
            key={cardItem.uniqueKey}
            uniqueKey={cardItem.uniqueKey}
            cardItem={cardItem}
            gameCompleted={gameCompleted}
          />
        );
      })}
    </div>
  );
}

export default Game;
