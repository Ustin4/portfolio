import React from 'react';
import s from './WorkBox.module.css'

const WorkBox = (props) => {
    return (
        <div className={s.box}>

            <div className={s.nameSkils}>
                <img className={s.Img} src={'https://s11.stc.yc.kpcdn.net/share/i/12/12940204/wr-960.webp'}
                     alt={'Картинка'}/>
                <button className={s.button}>Смотреть</button>
                <div className={s.description}>
                   <span>Название проекта</span>
                    краткое описание
                </div>
            </div>
        </div>

    );
};

export default WorkBox;