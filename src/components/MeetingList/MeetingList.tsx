import React, {useEffect} from 'react';
import s from './MeetingList.module.css'
import MeetingItem from "./MeetingItem/MeetingItem";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getList, MeetUpResponseDataType} from "../../redux/meetUpsListReduser";
import {AppStateType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {getMeTC} from "../../redux/userReducer";

const arr = Array(1, 3, 4, 5, 6, 7, 4, 6, 7)

const MeetingList = () => {
    const meets = useSelector<AppStateType, Array<MeetUpResponseDataType>>(state => state.meetUp.meetups)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList())
    }, [])
    return (
        <div>
            <h1 className={s.h1}>All meetings</h1>
            <Container className={s.list}>
                {meets.map(item => {
                    return (
                        <NavLink to={'/meetUp/' + item.id} className={s.link} style={{ textDecoration: 'none' }}>
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
                        </NavLink>
                    )
                })}
            </Container>
        </div>
    );
};

export default MeetingList;
