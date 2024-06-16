import { Link } from "react-router-dom";
import './styles.css';

function Footer(){
return (
    <footer className="footer">
        <div className="col">

             <h3>Контакты</h3>
        <a href="mailto:abzalovaadel23@gmail.com" >abzalovaadel23@gmail.com</a>
        
        <div className="authorship ">
            <div>
             Выпускная квалификационная работа Абзаловой Адель </div>
             <div>© 2024</div>
             <div>
            <a style={{color:'white'}} href="https://ru.freepik.com/free-photo/cute-animals-group-on-white-background_36028752.htm#fromView=search&page=1&position=1&uuid=7e497192-e5a4-4b2b-a976-3c34c8f3fc0a">Изображение от freepik</a>
            </div>
        <div><a href="https://www.flaticon.com/ru/free-icons/" title="Иконки">Иконки от Freepik - Flaticon</a></div>
        </div>
        </div>

                <div className="navigation col">
            <Link to="/" >Главная</Link>
            <Link to="/users" >Пользователи</Link>
            <Link to="/pets" >Животные</Link>
            <Link to='/care'>Уход за животными</Link>
        </div>
    </footer>
)
}
export default Footer;
