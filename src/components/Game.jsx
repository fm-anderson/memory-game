import Card from "./Card";
import { randomKey } from "../utils/helpers";

function Game({ cards }) {
  // const [disabled, setDisabled] = useState(false);
  // const [flippedCards, setFlippedCards] = useAtom(flippedAtom);

  return (
    <div className="m-10 grid max-w-screen-lg grid-cols-6 gap-4">
      {cards.map((cardItem) => {
        return <Card key={randomKey(8)} cardItem={cardItem} />;
      })}
    </div>
  );
}

export default Game;
