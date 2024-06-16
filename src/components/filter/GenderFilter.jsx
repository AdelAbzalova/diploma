import Filter from "./Filter";
import { petsActions } from "../../store/petsSlice";
import { useSelector } from "react-redux";

const GenderFilter= () => {
  const genderFilter = useSelector((state) => state.pets.genderFilter);
let options=[
    {
        value:'', 
        label:'Любой' 

    }, 
    {
        value:'Мальчик', 
        label:'Мальчик'

    }, 
    {
        value:'Девочка', 
        label:'Девочка' 

    }, 
]
  return (
    <Filter
      options={options}
      setFilter={petsActions.changeGenderFilter}
      value={genderFilter}
    />
  );
};
export default GenderFilter;