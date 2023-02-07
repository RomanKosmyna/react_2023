import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/postSlice";

const Post = ({post}) => {
    const {id, title, body} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postActions.getSelectedPost(post))}>Select</button>
        </div>
    );
};

export {Post};