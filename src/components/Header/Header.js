import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'animals'}>Animals</NavLink>
        </div>
    );
};

export {Header};