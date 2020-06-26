import React from 'react';
import User from './UserIcon/User';
import Message from "./MessageArea/Message";
import style from './Mymessage.module.css'


function Mymessage() {
    return (
        <div className={style.message}>
            <User
                logo={"https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg"}/>
            <div className={style.message__text}>
                <div className={style.message__textInner}>
                    <div className={style.text}>
                        <User name={"Яроцкий Андрей"}/>
                        <Message text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamu "}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mymessage;
