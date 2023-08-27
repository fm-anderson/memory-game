function Card({ image }) {
  return (
    <label className="swap swap-flip">
      <input type="checkbox" />

      <div className="swap-off bg-accent rounded-xl shadow-lg">
        <img src="/presidents/back.png" className="rounded-xl" />
      </div>
      <div className="swap-on">
        <img src={image} className="rounded-xl drop-shadow-lg" />
      </div>
    </label>
  );
}

export default Card;
