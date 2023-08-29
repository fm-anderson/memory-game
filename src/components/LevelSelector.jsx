function LevelSelector() {
  return (
    <div className="flex flex-row justify-start gap-4">
      <button className="btn bg-base-300  w-24 md:w-40">Easy</button>
      <button className="btn btn-neutral w-24 md:w-40">Medium</button>
      <button className="btn btn-accent w-24 md:w-40">Hard</button>
    </div>
  );
}

export default LevelSelector;
