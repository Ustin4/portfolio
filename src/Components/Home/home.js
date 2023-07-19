import s from './home.module.css'

const Home = () => {
    return (
            <div className={s.home}>



                    <div className={s.text}>
                        <span>Привет!</span>
                        <span>Меня зовут Коваленко Устин </span>
                        <span> Я front-end разработчик</span>
                        <img className={s.homeImagen} src={'https://s11.stc.yc.kpcdn.net/share/i/12/12940204/wr-960.webp'}/>
                    </div>
            </div>
    )
}

export default Home;
