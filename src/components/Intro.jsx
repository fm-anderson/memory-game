import { useAtom } from "jotai";
import { themeAtom } from "../utils/atoms";
import LevelSelector from "./LevelSelector";
import gridLight from "/grid-light.png";
import gridDark from "/grid-dark.png";

function Intro() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className="intro">
      <div className="intro-info">
        <h1 className="intro-title">
          U.S. presidents as{" "}
          <span className="text-accent">Pixar characters!</span>
        </h1>
        <div>
          <h1 className="intro-text">Choose a level:</h1>
          <LevelSelector />
        </div>
      </div>
      <div className="intro-image">
        <img
          src={theme === "dark" ? gridDark : gridLight}
          alt="presidents grid"
        />
      </div>
    </div>
  );
}

export default Intro;
