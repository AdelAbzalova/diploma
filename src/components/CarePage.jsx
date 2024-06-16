import { useSelector } from "react-redux";
import CareCard from "./CareCard";
function CarePage() {
  const tips = useSelector((state) => state.pets.tips);
  return (
    <div style={{ width: 1100, margin: "0 auto" }}>
      <div
        style={{
          marginTop: 150,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: 50,
        }}
      >
        {tips.map((tip) => (
          <CareCard key={tip.id} {...tip} />
        ))}
      </div>
    </div>
  );
}
export default CarePage;
