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
    <div className="layout">
      <Navbar />

      <main className="main">
        {playing ? (
          <>
            <Game cards={cards} />
            <div className="sidebar">
              <Counter />
              <div className="split"></div>
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
