// skilsBox.jsx

import React from 'react';
import s from './skilsBox.module.css';

const SkilsBox = (props) => {
    return (
        <div className={s.box}>
            <div className={s.nameSkils}>
                <img className={s.img} src="" alt="name"/>
                <div>{props.name}</div>
                <div className={s.description}>
                    Подробное описание
                    навыка
                </div>
            </div>


        </div>
    );
};

export default SkilsBox;