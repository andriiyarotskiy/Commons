import React from 'react';

type UserPropsType = {
    name : string
}

function User(props: UserPropsType) {
    return (
            <div>
                <span>{props.name}</span>
            </div>
    );
}

export default User;

// https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg
