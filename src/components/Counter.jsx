import { useAtom } from "jotai";
import { turnsAtom } from "../utils/atoms";
import { shadowSleek } from "../utils/helpers";

function Counter() {
  const [turn] = useAtom(turnsAtom);

  return (
    <div className={`card h-fit w-full bg-base-100 ${shadowSleek}`}>
      <div className="m-4 flex">
        <h2 className="justify-start text-lg font-semibold">Turns: {turn}</h2>
      </div>
    </div>
  );
}

export default Counter;
