import { useAtom } from "jotai";
import { levelAtom } from "../utils/atoms";

function LevelButtons() {
  const [, setLevel] = useAtom(levelAtom);

  const handleClick = (level) => {
    setLevel(level);
    window.confirm_modal.showModal();
  };
  return (
    <>
      <button className="btn-easy" onClick={() => handleClick("easy")}>
        Easy
      </button>
      <button className="btn-medium" onClick={() => handleClick("medium")}>
        Medium
      </button>
      <button className="btn-hard" onClick={() => handleClick("hard")}>
        Hard
      </button>
    </>
  );
}

export default LevelButtons;
