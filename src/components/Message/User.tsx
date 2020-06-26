import React from 'react';
import style from './User.module.css'

type UserIconType = {
    logo: string
}
type UserNameType = {
    name?: string
    logo?: string
}

const UserIcon = (props: UserIconType) => {
    return (
        <div className={style.message__avaIcon}>
            {props.logo &&
            <img
                src={props.logo}
                alt="avatar"/>}
        </div>
    );
}

const User = (props: UserNameType) => {
    return (
        <div className={style.text}>
            <UserIcon logo={props.logo ? props.logo : ''}/>
            <span>{props.name}</span>
        </div>
    );
}

export default User

// https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg
