import { useState } from "react";
import Game from "../components/Game";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { randomCards } from "../utils/game";
import { presidents } from "../utils/presidents";

function HomePage() {
  const [level, setLevel] = useState("medium");
  const [cards, setCards] = useState(randomCards(presidents, level));

  return (
    <div className="bg-base-100 flex h-screen flex-col items-center justify-between text-center">
      <Navbar />

      <main className="grid max-w-full lg:max-w-[80%]">
        <Game cards={cards} />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
