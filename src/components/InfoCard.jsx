function InfoCard() {
  return (
    <div className="card bg-base-100 w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:w-64">
      <span className="hidden md:flex">
        <figure className="px-3 pt-3">
          <img src="/presidents/1.png" className="rounded-xl" />
        </figure>
      </span>

      <div className="my-3 items-center text-center">
        <h2 className="text-md font-semibold">George Washington</h2>
        <p>Years: 1789-1797</p>
      </div>
    </div>
  );
}

export default InfoCard;
