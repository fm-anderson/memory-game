import { useAtom } from "jotai";
import { matchedAtom } from "../utils/atoms";
import InfoCard from "./InfoCard";

function Stack() {
  const [matched] = useAtom(matchedAtom);

  return (
    <div className="stack grid">
      {[...matched].reverse().map((item) => {
        return <InfoCard key={item.uniqueKey} item={item} />;
      })}
    </div>
  );
}

export default Stack;
