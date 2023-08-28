import { randomKey } from "../utils/helpers";
import Card from "./Card";

function Game({ cards }) {
  return (
    <div className="m-10 grid max-w-screen-lg grid-cols-6 gap-4">
      {cards.map((cardItem) => {
        return <Card key={randomKey(8)} cardItem={cardItem} />;
      })}
    </div>
  );
}

export default Game;
