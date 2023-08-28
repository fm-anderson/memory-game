import { shuffleArray } from "./helpers";

export const randomCards = (arr, level) => {
  let playingCards = [];

  switch (level) {
    case "medium":
      playingCards = arr.slice(0, 12);
      break;
    case "hard":
      playingCards = arr.slice(0, 15);
      break;
    default:
      playingCards = arr.slice(0, 9);
      break;
  }

  const cards = [...playingCards, ...playingCards];
  return shuffleArray(cards);
};

export const isMatch = (cards) => {
  return cards.flippedOne.id === cards.flippedTwo.id;
};

export const checkCards = (card, cards) => {
  return card === cards.flippedOne || card === cards.flippedTwo;
};

export const handleMatch = (active, setMatched, setActive) => {
  const matchTimer = setTimeout(() => {
    setMatched((prevState) => {
      if (prevState.some((card) => card.id === active.flippedOne.id)) {
        return prevState;
      }
      return [...prevState, active.flippedOne];
    });
    setActive({ flippedOne: "", flippedTwo: "" });
  }, 1000);
  return () => clearTimeout(matchTimer);
};

export const resetFlipped = (setter, callback) => {
  const timer = setTimeout(() => {
    setter({ flippedOne: "", flippedTwo: "" });
    if (callback) callback();
  }, 1000);
  return () => clearTimeout(timer);
};
