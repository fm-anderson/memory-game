import { presidents } from "../presidents";
import Card from "./Card";

function Game() {
  return (
    <div className="mx-10 grid grid-cols-5 gap-4">
      <Card image={presidents[0].photo} />
      <Card image={presidents[1].photo} />
      <Card image={presidents[2].photo} />
      <Card image={presidents[3].photo} />
      <Card image={presidents[4].photo} />
      <Card image={presidents[12].photo} />
      <Card image={presidents[45].photo} />
      <Card image={presidents[6].photo} />
      <Card image={presidents[44].photo} />
      <Card image={presidents[43].photo} />
    </div>
  );
}

export default Game;
