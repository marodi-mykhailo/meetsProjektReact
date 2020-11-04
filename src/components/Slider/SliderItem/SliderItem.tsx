import React from 'react';
import {Button} from 'react-bootstrap';
import s from './SliderItem.module.css'

const img = 'https://www.gov.pl/photo/format/686d72ed-6412-480e-8d48-c08358c2d47f/resolution/1328x560'

const SliderItem = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.imgWrap}>
                <img className={s.img} src={img} alt={''}/>
            </div>
            <h1 className={s.h1}>Hackathon</h1>
            <div className={s.textBox}>
                <h2 className={s.h2}>
                    Dołącz do największego wydarzenia IT w Polsce
                </h2>
                <button className={s.btn}>Chcę</button>
            </div>
        </div>
    );
};

export default SliderItem;
