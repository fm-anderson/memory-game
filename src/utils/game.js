import { shuffleArray, randomKey } from "./helpers";

export const randomCards = (arr, level) => {
  let playingCards = [];
  const shuffledArr = shuffleArray(arr);

  switch (level) {
    case "medium":
      playingCards = shuffledArr.slice(0, 12);
      break;
    case "hard":
      playingCards = shuffledArr.slice(0, 15);
      break;
    default:
      playingCards = shuffledArr.slice(0, 9);
      break;
  }
  const duplicatedArr = [...playingCards, ...playingCards];
  const arrWithKeys = duplicatedArr.map((card) => ({
    ...card,
    uniqueKey: randomKey(8),
  }));
  return arrWithKeys;
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
