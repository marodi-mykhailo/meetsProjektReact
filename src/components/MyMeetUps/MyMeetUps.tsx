import React from 'react';
import style from './MyMeetUps.module.css'

const img = 'https://secure.meetupstatic.com/photos/event/a/8/4/e/highres_486643086.jpeg'

const MyMeetUps = () => {
    return (
        <section className={style.wrapper}>
            <div className={style.imgWrapp}>
                <img src={img} alt={"image"}/>
            </div>
        </section>
    );
};

export default MyMeetUps;
