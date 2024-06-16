import Filter from "./Filter";
import { petsActions } from "../../store/petsSlice";
import { useSelector } from "react-redux";

const AgeFilter= () => {
  const ageFilter = useSelector((state) => state.pets.ageFilter);
let options=[
    {
        value:'', 
        label:'Любой' 

    }, 
    {
        value:0, 
        label:'0-12 месяцев' 

    }, 
    {
        value:1, 
        label:'1-4 года' 

    }, 
    {
        value:2, 
        label:'5-8 лет' 

    }, 
    {
        value:3, 
        label:'9+ лет' 

    }, 
]
  return (
    <Filter
      options={options}
      setFilter={petsActions.changeAgeFilter}
      value={ageFilter}
    />
  );
};
export default AgeFilter;