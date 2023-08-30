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
    <div className="game">
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
