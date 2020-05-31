import React from 'react';
import style from './Message.module.css'

type MessagePropsType = {
    text: string
}

function Message(props: MessagePropsType) {
    return (

        <div className={style.text__item}>
            {props.text}
            <div className={style.time__item}>
                <span>13:20</span>
            </div>
        </div>
    );
}

export default Message;
