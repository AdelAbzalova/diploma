

import { useSelector } from "react-redux";
import PetCard from "./Card/PetCard";
import Loader from "./Loader";
function PetsPage(){
    const {pets, status}=useSelector(state=>state.pets)
    return (
        <>
       {status==='loading' && <Loader />}
        <div style={{display:'flex', justifyContent:'space-around', marginTop:120, flexWrap:'wrap'}}>
        {pets.map(pet=><div style={{margin:'20px 0'}}><PetCard  key={pet.id} {...pet} /> </div>)}
        </div>
        </>
    )
}

export default PetsPage;