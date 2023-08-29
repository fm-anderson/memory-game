import { useAtom } from "jotai";
import { levelAtom } from "../utils/atoms";
import { capitalizeFirstLetter } from "../utils/helpers";
import { randomCards } from "../utils/game";
import { presidents } from "../utils/presidents";

function Confirmation({ setPlaying, setCards }) {
  const [level] = useAtom(levelAtom);

  const handleStart = () => {
    setCards(randomCards(presidents, level));
    setPlaying(true);
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
    <dialog id="confirm_modal" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-2xl font-bold">
          You've selected: {capitalizeFirstLetter(level)}
        </h3>
        <p className="mb-6 py-4 text-xl">Ready to start?</p>
        <span className="flex justify-center gap-4">
          <button className={`btn ${buttonColor} w-24`} onClick={handleStart}>
            Start
          </button>
          <button className="btn w-24">Cancel</button>
        </span>
      </form>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Confirmation;
