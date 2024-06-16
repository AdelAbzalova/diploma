import Filter from "./Filter";
import { petsActions } from "../../store/petsSlice";
import { useSelector } from "react-redux";

const CityFilter= () => {
  const cities = useSelector((state) => state.pets.cities);
  const cityFilter=useSelector((state)=>state.pets.cityFilter);
  console.log(cities);
  let options = [{ value: "", label: "Любой город" }];
  options.push(
    ...cities.map((city) => {
      let option = { value: city.name};
      return option;
    })
  );
  return (
    <Filter
      options={options}
      setFilter={petsActions.changeCityFilter}
      value={cityFilter}
    />
  );
};
export default CityFilter;