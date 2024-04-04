
import { useSelector } from "react-redux";
import PetCard from "./Card/PetCard";
function PetCards(){
    const {pets}=useSelector(state=>state.pets)
return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
    {pets.slice(0,3).map(pet=><PetCard  key={pet.id} {...pet} />)}
    </div>
)
}
export default PetCards;