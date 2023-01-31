import React from 'react';
import {NavLink} from "react-router-dom";
import {requestLinks} from "../../api";
import css from './Header.module.css';
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user, logOut} = useAuthContext();

    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={requestLinks.users}>Users</NavLink>
            {user ?
            <div>
                {user} <button onClick={() => logOut()}>Log Out</button>
            </div> : null}
        </div>
    );
};

export {Header};