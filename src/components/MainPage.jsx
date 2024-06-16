import "./styles.css";
import { Button } from "antd";
import bath from "../images/bath-icon.png";
import hospital from "../images/hospital-icon.png";
import house from "../images/house-icon.png";
import toy from "../images/toy-icon.png";
import PetCards from "./PetCards";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import FoundationCards from "./FoundationCards";
import { petsActions } from "../store/petsSlice";
import animals from "../images/animals.jpg";
function MainPage() {
  const status = useSelector((state) => state.pets.status);
  const dispatch = useDispatch();
  function handleClick(value) {
    dispatch(petsActions.changeTypeFilter(value));
    dispatch(petsActions.changeNav("pets"));
  }
  return (
    <>
      <div>
        <div style={{ height: "100vh" }}>
          <h1 className="header">
            Подари <em style={{ color: "rgb(103,95,72)" }}>животным</em> второй
            шанс!
          </h1>
          <img src={animals} alt="dog" className="main-img" />
        </div>
        <div className="pet-button">
          <Button className="pet-btn">
            <Link
              to="/pets"
              className="pet-btn"
              style={{ textDecoration: "none" }}
              onClick={() => handleClick("cat")}
            >
              Кошки
            </Link>
          </Button>
          <Button className="pet-btn">
            <Link
              to="/pets"
              style={{ textDecoration: "none" }}
              onClick={() => handleClick("dog")}
            >
              Собаки
            </Link>
          </Button>
          <Button className="pet-btn">
            <Link
              to="/pets"
              className="pet-btn"
              style={{ textDecoration: "none" }}
              onClick={() => handleClick("other")}
            >
              Другие животные
            </Link>
          </Button>
        </div>

        <div className="main-tips">
          <h1 style={{ paddingTop: 10 }}>Как ухаживать за питомцами</h1>

          <ul className="tips-list">
            <li className="tips-elem">
              <img src={hospital} alt="" className="tips-img" />
              <h3 className="tips-header">1.Здоровье питомца</h3>
              <div className="tips-description">
                Регулярно наблюдайте за здоровьем и питанием питомца.
              </div>
            </li>
            <li className="tips-elem">
              <a
                href="https://www.flaticon.com/ru/free-icons/"
                title="ванна иконки"
              ></a>
              <img src={bath} alt="" className="tips-img" />
              <h3 className="tips-header">2.Уход и гигиена</h3>
              <div className="tips-description">
                Следите за гигиеной животного и его жилища.
              </div>
            </li>
            <li className="tips-elem">
              <img src={house} alt="" className="tips-img" />
              <h3 className="tips-header">3.Обустройство пространства</h3>
              <div className="tips-description">
                Обустройте питомцу собственный уголок.
              </div>
            </li>
            <li className="tips-elem">
              <img src={toy} alt="" className="tips-img" />
              <h3 className="tips-header">4.Прогулки и игры</h3>
              <div className="tips-description">
                Гуляйте и играйте с любимцем.
              </div>
            </li>
          </ul>
        </div>
        <div className="main-find">
          <h1>Найти друга</h1>
          {status === "loading" && <Loader />}
          <PetCards />
          <Link to={`/pets`}>
            <Button
              size="large"
              style={{ margin: "20px 0" }}
              onClick={() => dispatch(petsActions.clearFilters())}
            >
              Все животные
            </Button>
          </Link>
        </div>
        <div>
          <h1>Фонды и приюты</h1>
          <FoundationCards />
        </div>
      </div>
    </>
  );
}
export default MainPage;
