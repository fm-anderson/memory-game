export const randomCards = (arr, level) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  let playingCards = [];

  switch (level) {
    case "medium":
      playingCards = shuffled.slice(0, 12);
      break;
    case "hard":
      playingCards = shuffled.slice(0, 15);
      break;
    default:
      playingCards = shuffled.slice(0, 9);
      break;
  }

  const cards = [...playingCards, ...playingCards];
  return cards.sort(() => 0.5 - Math.random());
};

export const isMatch = (cards) => {
  return cards.flippedOne.id === cards.flippedTwo.id;
};

export const isCurrentFlipped = (card, cards) => {
  return card === cards.flippedOne || card === cards.flippedTwo;
};

export const resetFlipped = (setter) => {
  const timer = setTimeout(() => {
    setter({ flippedOne: "", flippedTwo: "" });
  }, 1000);
  return () => clearTimeout(timer);
};
