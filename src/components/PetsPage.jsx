import { Alert, Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import PetCard from "./Card/PetCard";
import FilterComponent from "./filter/FilterComponent";
import Loader from "./Loader";
function PetsPage() {
  const { pets, status } = useSelector((state) => state.pets);
  const [isFilter, setIsFilter] = useState(false);
  const { ageFilter, genderFilter, cityFilter, typeFilter } = useSelector(
    (state) => state.pets
  );
  const measuresMonth = ["месяцев", "месяца", "месяц"];
  const measuresYear = ["год", "года", "лет"];
  const filteredPets = pets.filter((pet) => {
    if (cityFilter !== "" && pet.city !== cityFilter) {
      return false;
    }
    if (genderFilter !== "" && pet.gender !== genderFilter) {
      return false;
    }
    if (typeFilter !== "" && pet.species !== typeFilter) {
      return false;
    }
    if (ageFilter !== "" && pet.age) {
      let ageArr = pet.age.split(" ");
      if (ageFilter === 0 && measuresYear.includes(ageArr[1])) {
        return false;
      }

      if (ageFilter > 0 && measuresMonth.includes(ageArr[1])) {
        return false;
      } else {
        if (ageFilter === 1 && (ageArr[0] < 1 || ageArr[0] > 4)) {
          return false;
        } else if (ageFilter === 2 && (ageArr[0] < 5 || ageArr[0] > 8)) {
          return false;
        } else if (ageFilter === 3 && ageArr[0] < 9) {
          return false;
        }
      }
      return true;
    }
    return true;
  });
  return (
    <div style={{ marginTop: 100 }}>
      {status === "loading" && <Loader />}
      {status === "succeeded" && (
        <Button size="large" onClick={() => setIsFilter((prev) => !prev)}>
          {isFilter ? "Скрыть фильтры" : "Показать фильтры"}
        </Button>
      )}
      {isFilter && (
        <div style={{ marginTop: 20 }}>
          <FilterComponent />
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        {filteredPets.map((pet) => (
          <div key={pet.id} style={{ margin: "20px 0" }}>
            <PetCard {...pet} />{" "}
          </div>
        ))}
      </div>
      {filteredPets.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Alert
            style={{ marginTop: 30, marginBottom: 150, width: "50%" }}
            message="Ничего не найдено "
            description="попробуйте изменить фильтры"
            showIcon
            type="info"
          />
        </div>
      )}
    </div>
  );
}

export default PetsPage;
