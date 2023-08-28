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

export const isMismatched = (cards) =>
  cards.flippedOne &&
  cards.flippedTwo &&
  cards.flippedOne.id !== cards.flippedTwo.id;

export const isCurrentFlipped = (card, cards) =>
  card === cards.flippedOne || card === cards.flippedTwo;

export const randomKey = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
