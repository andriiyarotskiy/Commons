import React from 'react';

type MessagePropsType = {
    text : string
}

function Message(props: MessagePropsType) {
    return (
        <div className="text__item">
            {props.text}
            <div className="time__item">
                <span>13:20</span>
            </div>
        </div>
    );
}

export default Message;
