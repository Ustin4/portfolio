import './App.css';
import Home from "./Components/Home/home";
import Skils from "./Components/skils/skils";
import Work from "./Components/work/work";
import s from './Contact.module.css'

function App() {
    return (
        <div className={s.box}>

            <div className={s.boxBurgerMenu}>
                <nav className={s.burgerMenu}>
                    <a href="#">Главная </a>
                    <a href="#">Скиллы </a>
                    <a href="#">Работы </a>
                    <a href="#">Контакты </a>
                </nav>

            </div>

            <Home/>
            <div className={s.skilsContainer}>
                <span className={s.spanSkils}>Мои скилы</span>
                <Skils/>
            </div>
            <div className={s.boxMain}>
               <div className={s.mainWork}>
                   <span className={s.spanSkils}>Мои работы</span>
                   <Work/>
               </div>
            </div>
            <div className={s.containerLook}>
                <div className={s.containerLookText}>
                    Рассматриваю
                    варианты
                    удаленной работы
                </div>
                <button className={s.button}>
                    Нанять меня
                </button>
            </div>
            <div className={s.boxContact}>
                <span>Контакты</span>
                <input type="text"/>
                <input type="email"/>
                <textarea></textarea>
                <button>Отправить</button>
            </div>
            <div className={s.Footer}>
                <span className={s.textFooter}>Коваленко Устин</span>
                <div className={s.photoContainer}>
                    <img className={s.photo} src={"photo1.jpg"} alt="Photo 1"/>
                    <img className={s.photo} src={"photo2.jpg"} alt="Photo 2"/>
                    <img className={s.photo} src={"photo3.jpg"} alt="Photo 3"/>
                </div>
            </div>
        </div>
    )
}

export default App;

