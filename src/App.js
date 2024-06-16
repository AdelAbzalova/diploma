import "./App.css";
import Navigation from "./components/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCities, fetchPet, fetchPets, fetchTips } from "./store/petsSlice";
import { fetchFoundations } from "./store/foundationsSlice";
import { fetchUsers } from "./store/usersSlice";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
    dispatch(fetchFoundations());
    dispatch(fetchCities());
    dispatch(fetchUsers());
    dispatch(fetchTips());}, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <main style={{ flex: "1" }}>
        <RoutesComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>);}
export default App;
