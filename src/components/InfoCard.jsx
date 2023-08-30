function InfoCard({ item }) {
  return (
    <div className="info-card">
      <span className="info-image">
        <img src={item.photo} className="rounded-xl" />
      </span>

      <div className="info-content">
        <h2 className="font-semibold">{item.name}</h2>
        <p>Years: {item.yearsInOffice}</p>
      </div>
    </div>
  );
}

export default InfoCard;
