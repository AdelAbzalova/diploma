import { useSelector } from "react-redux";
import FoundationCard from "./FoundationCard";
function FoundationCards() {
  const { foundations } = useSelector((state) => state.foundations);
  // let arr = [];
  // for (let i = 0; i < foundations.length; i += 4) {
  //   arr.push([i, i + 4]);
  // }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,15vw)",
        gridAutoRows: "max-content",
        rowGap: 50,
        columnGap: "7%",
        justifyContent: "center",
        marginBottom: 50,
      }}
    >
      {foundations.map((foundation) => (
        <FoundationCard key={foundation.id} {...foundation} />
      ))}
    </div>
  );
}
export default FoundationCards;
