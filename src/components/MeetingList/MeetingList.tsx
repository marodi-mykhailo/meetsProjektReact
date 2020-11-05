import {Paper} from '@material-ui/core';
import React from 'react';
import s from './MeetingList.module.css'
import MeetingItem from "./MeetingItem/MeetingItem";
import {Container} from "react-bootstrap";

const arr = Array(1, 3, 4, 5, 6, 7,4,6,7)

const MeetingList = () => {
    return (
        <div>
            <h1 className={s.h1}>All meetings</h1>
            <Container className={s.list}>
                {arr.map(item => {
                    return (
                        <MeetingItem/>
                    )
                })}
            </Container>
        </div>
    );
};

export default MeetingList;
