import React from 'react';
import './User.css';

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div className={'userBlock'}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
        </div>
    );
};

export {User};