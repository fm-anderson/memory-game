import { useState } from "react";
import { useAtom } from "jotai";
import { completedAtom } from "../utils/atoms";
import Game from "../components/Game";
import Stack from "../components/Stack";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Congrats from "../components/Congrats";
import Confirmation from "../components/Confirmation";

function HomePage() {
  const [cards, setCards] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [gameCompleted] = useAtom(completedAtom);

  return (
    <div className="flex h-screen flex-col items-center justify-between bg-base-100 text-center">
      <Navbar />

      <main className="flex max-w-full flex-col-reverse md:flex-row lg:max-w-[90%]">
        {playing ? (
          <>
            <Game cards={cards} />
            <div className="m-4 gap-4 md:w-64">
              <Counter />
              <div className="divider m-4"></div>
              {gameCompleted ? <Congrats /> : <Stack />}
            </div>
          </>
        ) : (
          <Intro />
        )}
      </main>

      <Footer />
      <Confirmation setPlaying={setPlaying} setCards={setCards} />
    </div>
  );
}

export default HomePage;
