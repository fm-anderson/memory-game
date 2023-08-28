import { randomKey } from "../utils/helpers";
import Card from "./Card";

function Game({ cards }) {
  return (
    <div className="m-4 grid max-w-screen-lg grid-cols-4 gap-4 md:m-10 md:grid-cols-6">
      {cards.map((cardItem) => {
        return <Card key={randomKey(8)} cardItem={cardItem} />;
      })}
    </div>
  );
}

export default Game;
