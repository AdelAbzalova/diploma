import { Route, Routes } from 'react-router-dom';
import PetsPage from './PetsPage';
import UsersPage from './UsersPage';
import MainPage from './MainPage';


function RoutesComponent() {
  return (
    <>
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/pets" element={<PetsPage />} />
         <Route path="/users" element={<UsersPage />} />
       </Routes>

    </>
  );
}

export default RoutesComponent;

