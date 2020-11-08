import React, {useEffect} from 'react';
import s from './MeetingList.module.css'
import MeetingItem from "./MeetingItem/MeetingItem";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getList, MeetUpDataType} from "../../redux/meetUpReduser";
import {AppStateType} from "../../redux/store";

const arr = Array(1, 3, 4, 5, 6, 7,4,6,7)

const MeetingList = () => {
    const meets = useSelector<AppStateType, Array<MeetUpDataType> >(state => state.meetUp.meetups)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList())
    },[])
    return (
        <div>
            <h1 className={s.h1}>All meetings</h1>
            <Container className={s.list}>
                {meets.map(item => {
                    return (
                        <MeetingItem
                            id={item.id}
                            title={item.title}
                            city={item.city}
                            description={item.description}
                            meetupImgPath={item.meetupImgPath}
                            meetupDate={item.meetupDate}
                            createdByUser={item.createdByUser}
                            users={item.users}
                        />
                    )
                })}
            </Container>
        </div>
    );
};

export default MeetingList;
