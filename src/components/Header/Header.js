import React from 'react';
import {NavLink} from "react-router-dom";
import {requestLinks} from "../../api";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={requestLinks.posts}>Posts</NavLink>
            <NavLink to={requestLinks.users}>Users</NavLink>
        </div>
    );
};

export {Header};