import { useState } from "react";
import { randomCards } from "../utils/game";
import { presidents } from "../utils/presidents";
import Game from "../components/Game";
import Stack from "../components/Stack";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Intro from "../components/Intro";

function HomePage() {
  const [level, setLevel] = useState("");
  const [cards, setCards] = useState(randomCards(presidents, level));

  return (
    <div className="bg-base-100 flex h-screen flex-col items-center justify-between text-center">
      <Navbar />

      <main className="flex max-w-full flex-col-reverse md:flex-row lg:max-w-[90%]">
        <Intro />
        {level !== "" && (
          <>
            <Game cards={cards} />
            <div className="m-4 gap-4 md:w-64">
              <Counter />
              <div className="divider m-4"></div>
              <Stack />
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
