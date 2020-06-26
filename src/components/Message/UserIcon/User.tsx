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
