import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import {logDOM} from "@testing-library/react";

const User = ({user}) => {
    const {id, name, username} = user;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={() => dispatch(userActions.getSelectedUser(user))}>Select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>API Select</button>
        </div>
    );
};

export default User;