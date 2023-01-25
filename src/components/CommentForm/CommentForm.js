import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../joi validator/commentValidator";
import {userService} from "../../services";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all', resolver:joiResolver(commentValidator)});

    const submit = async (newComment) => {
        const {data} = await userService.createUser(newComment);
        setComments(prevState => [...prevState, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {<span>{errors.name?.message}</span>}
            <button disabled={!isValid}>Add new comment</button>
        </form>
    );
};

export {CommentForm};