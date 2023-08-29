import { useAtom } from "jotai";
import { themeAtom } from "../utils/atoms";
import LevelSelector from "./LevelSelector";
import gridLight from "/grid-light.png";
import gridDark from "/grid-dark.png";

function Intro() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className="mx-4 flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-around">
        <h1 className="mb-10 text-start text-4xl font-bold md:m-0 lg:text-7xl">
          U.S. presidents as{" "}
          <span className="text-accent">Pixar characters!</span>
        </h1>
        <div className="mb-12 md:mb-0">
          <h1 className="mb-2 text-start text-3xl font-bold md:mb-5 lg:text-6xl">
            Choose a level:
          </h1>
          <LevelSelector />
        </div>
      </div>
      <div className="lg:w-[80%] 2xl:w-[50%]">
        <img
          src={theme === "dark" ? gridDark : gridLight}
          alt="presidents grid"
        />
      </div>
    </div>
  );
}

export default Intro;
