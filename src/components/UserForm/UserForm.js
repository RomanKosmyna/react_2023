import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../joi validator";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(userValidator)});

    const submit = async (newUser) => {
        const {data} = await userService.createUser(newUser);
        setUsers(prevState => [...prevState, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {<span>{errors.name?.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {<span>{errors.username?.message}</span>}
            <button disabled={!isValid}>Create new user</button>
        </form>
    );
};

export {UserForm};