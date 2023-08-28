import { useState } from "react";

function Card({ cardItem, handleChoice }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    console.log("handleClick ", cardItem);
    setFlipped(true);
    // handleChoice(cardItem);
  };

  return (
    <label className={`swap swap-flip ${flipped ? "swap-active" : ""}`}>
      <input type="checkbox" checked={flipped} onChange={handleClick} />
      <div className="swap-off bg-accent rounded-xl shadow-lg">
        <img src="/presidents/back.png" className="rounded-xl" />
      </div>
      <div className="swap-on">
        <img src={cardItem.photo} className="rounded-xl drop-shadow-lg" />
      </div>
    </label>
  );
}

export default Card;
