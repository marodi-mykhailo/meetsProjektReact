import Paper from '@material-ui/core/Paper';
import React from 'react';
import s from './MeetingItem.module.css'
import {AvatarGroup} from "@material-ui/lab";
import Avatar from '@material-ui/core/Avatar';

const img = 'https://secure.meetupstatic.com/photos/event/a/8/4/e/highres_486643086.jpeg'

type MeetingItemPropsType ={
    "id": string,
    "title": string,
    "description": string,
    "meetupImgPath": string,
    "meetupDate": string,
    "city": string,
    "createdByUser": string,
    "users": null
}

const MeetingItem = (props: MeetingItemPropsType) => {
    return (
        <Paper elevation={3} className={s.itemWrapp}>
            <div className={s.item}>
                <div className={s.imgWrapp}><img className={s.img} src={props.meetupImgPath} alt={''}/></div>
                <div className={s.container}>
                    <div className={s.dateWrapp}><span>{props.meetupDate}</span></div>
                    <div className={s.info}>
                        <div className={s.titleWrapp}><h6>{props.title}</h6></div>
                        <div className={s.name}><span>{props.createdByUser} {props.city}</span></div>
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
    );
};

export default MeetingItem;
