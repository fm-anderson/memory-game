import Card from "./Card";

function Game({ cards }) {
  return (
    <div className="m-4 grid max-w-screen-lg grid-cols-4 gap-2 md:mx-4 md:grid-cols-6 md:gap-4">
      {cards.map((cardItem) => {
        return (
          <Card
            key={cardItem.uniqueKey}
            uniqueKey={cardItem.uniqueKey}
            cardItem={cardItem}
          />
        );
      })}
    </div>
  );
}

export default Game;
