import { useAtom } from "jotai";
import { levelAtom } from "../utils/atoms";

function LevelButtons() {
  const [, setLevel] = useAtom(levelAtom);

  const handleClick = (selected) => {
    setLevel(selected);
    window.confirm_modal.showModal();
  };
  return (
    <>
      <button
        className="btn btn-primary w-24 md:w-40"
        onClick={() => handleClick("easy")}
      >
        Easy
      </button>
      <button
        className="btn btn-accent w-24 md:w-40"
        onClick={() => handleClick("medium")}
      >
        Medium
      </button>
      <button
        className="btn btn-neutral w-24 md:w-40"
        onClick={() => handleClick("hard")}
      >
        Hard
      </button>
    </>
  );
}

export default LevelButtons;
