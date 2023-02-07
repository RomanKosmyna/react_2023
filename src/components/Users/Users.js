import React, {useEffect} from 'react';
import {userRequest} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {userActions, userReducer} from "../../redux";
import {logDOM} from "@testing-library/react";
import User from "../User/User";

const Users = () => {
    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        // userRequest.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    },[dispatch]);

    return (
        <div>
            {loading ? <h1>Loading.............</h1> : null}
            {errors && JSON.stringify(errors)}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;