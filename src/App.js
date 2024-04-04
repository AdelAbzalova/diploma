// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //     </div>
// //   );
// // }

// // export default App;

import './App.css';
// import MainPage from './components/MainPage';
// import GamePage from './components/GamePage';
import Navigation from './components/navigation/Navigation';

// import PetsPage from './components/PetsPage';
// import UsersPage from './components/UsersPage';
// import MainPage from './components/MainPage';
import RoutesComponent from './components/RoutesComponent';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPets } from './store/petsSlice';
import {fetchFoundations} from './store/foundationsSlice';
import Footer from './components/Footer';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
    dispatch(fetchFoundations())
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation/>
    <main style={{flex:'1'}}>
    <RoutesComponent />
    </main>
<footer > <Footer /></footer>
     
 

    </div>
  );
}

export default App;

