import React, {useEffect} from 'react';
import s from './MyMeetUps.module.css'
import Paper from "@material-ui/core/Paper";
import {AvatarGroup} from "@material-ui/lab";
import Avatar from "@material-ui/core/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getList, getMyMeetUps, MeetUpDataType} from "../../redux/meetUpReduser";
import Container from '@material-ui/core/Container';

const img = 'https://secure.meetupstatic.com/photos/event/a/8/4/e/highres_486643086.jpeg'

const MyMeetUps = () => {
    const meets = useSelector<AppStateType, Array<MeetUpDataType>>(state => state.meetUp.meetups)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyMeetUps())
    }, [])
    return (
        <section className={s.section}>
            <Container>
                <div className={s.mainWrapp}>
            {meets.map(item => {
                return (
                    <Paper elevation={3} className={s.itemWrapp}>
                        <div className={s.item}>
                            <div className={s.imgWrapp}><img className={s.img} src={item.meetupImgPath} alt={''}/></div>
                            <div className={s.container}>
                                <div className={s.dateWrapp}><span>{item.meetupDate}</span></div>
                                <div className={s.info}>
                                    <div className={s.titleWrapp}><h6>{item.title}</h6></div>
                                    <div className={s.name}><span>{item.createdByUser} {item.city}</span></div>
                                </div>
                                <div className={s.membersWrapp}>
                                    <AvatarGroup spacing={'medium'} max={4}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
                                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                                    </AvatarGroup>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })}
                </div>
            </Container>
        </section>
    );
};

export default MyMeetUps;
