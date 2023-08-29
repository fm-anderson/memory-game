import { useAtom } from "jotai";
import { turnsAtom } from "../utils/atoms";

function Counter() {
  const [turn] = useAtom(turnsAtom);

  return (
    <div className="card bg-base-100 h-fit w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div className="m-4 flex">
        <h2 className="justify-start text-lg font-semibold">Turns: {turn}</h2>
      </div>
    </div>
  );
}

export default Counter;
