import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Game from "../components/Game";
import { randomCards } from "../utils/helpers";
import { presidents } from "../utils/presidents";

function HomePage() {
  const [level, setLevel] = useState("medium");
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [cards, setCards] = useState(randomCards(presidents, level));

  const handleChoice = (card) => {
    console.log("handleChoice ", card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between text-center">
      <Navbar />

      <main className="grid max-w-full lg:max-w-[80%]">
        <Game cards={cards} />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
