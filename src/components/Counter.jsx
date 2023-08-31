import { useAtom } from "jotai";
import { turnsAtom } from "../utils/atoms";

function Counter() {
  const [turn] = useAtom(turnsAtom);

  return (
    <div className="counter">
      <div className="m-4 flex">
        <h2 className="counter-text">Turns: {turn}</h2>
      </div>
    </div>
  );
}

export default Counter;
