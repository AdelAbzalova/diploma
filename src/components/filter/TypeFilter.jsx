import Filter from "./Filter";
import { petsActions } from "../../store/petsSlice";
import { useSelector } from "react-redux";

const TypeFilter= () => {
  const typeFilter = useSelector((state) => state.pets.typeFilter);
let options=[
    {
        value:'', 
        label:'Любой' 

    }, 
    {
        value:'cat', 
        label:'Кошка'

    }, 
    {
        value:'dog', 
        label:'Собака' 

    }, 
    {
        value:'other', 
        label:'Другой'
    }
]
  return (
    <Filter
      options={options}
      setFilter={petsActions.changeTypeFilter}
      value={typeFilter}
    />
  );
};
export default TypeFilter;