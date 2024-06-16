import { Route, Routes } from 'react-router-dom';
import PetsPage from './PetsPage';
import UsersPage from './UsersPage';
import MainPage from './MainPage';
import PetPage from './PetPage';
import UserPage from './UserPage';
import CarePage from './CarePage';


function RoutesComponent() {
  return (
    <>
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/pets" element={<PetsPage />} />
         <Route path="/users" element={<UsersPage />} />
         <Route path="/pets/:id" element={<PetPage/>}/>
         <Route path='/users/:id' element={<UserPage/>} /> 
         <Route path='/care' element={<CarePage/>}/>
       </Routes>

    </>
  );
}

export default RoutesComponent;

