import { useAtom } from "jotai";
import {
  completedAtom,
  levelAtom,
  matchedAtom,
  turnsAtom,
} from "../utils/atoms";
import { capitalizeFirstLetter } from "../utils/helpers";
import { randomCards } from "../utils/game";
import { presidents } from "../utils/presidents";

function Confirmation({ setPlaying, setCards }) {
  const [level] = useAtom(levelAtom);
  const [, setTurn] = useAtom(turnsAtom);
  const [, setGameCompleted] = useAtom(completedAtom);
  const [, setMatched] = useAtom(matchedAtom);

  const handleStart = () => {
    setCards(randomCards(presidents, level));
    setGameCompleted(false);
    setPlaying(true);
    setMatched([]);
    setTurn(0);
  };

  let buttonColor;
  switch (level) {
    case "easy":
      buttonColor = "btn-primary";
      break;
    case "medium":
      buttonColor = "btn-accent";
      break;
    case "hard":
      buttonColor = "btn-neutral";
      break;
    default:
      buttonColor = "";
  }

  return (
    <dialog id="confirm_modal" className="modal-confirm">
      <form method="dialog" className="modal-box">
        <h3 className="modal-title">
          You've selected: {capitalizeFirstLetter(level)}
        </h3>
        <p className="modal-subtitle">Ready to start?</p>
        <span className="modal-buttons">
          <button
            className={`shadow-stiglitz btn w-24 ${buttonColor}`}
            onClick={handleStart}
          >
            Start
          </button>
          <button className="modal-cancel">Cancel</button>
        </span>
      </form>

      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
}

export default Confirmation;
