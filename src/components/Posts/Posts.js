import React, {useEffect} from 'react';
import {postRequest} from "../../api/requests/postRequest";
import {useDispatch, useSelector} from "react-redux";
import {postActions, postReducer} from "../../redux/slices/postSlice";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, errors, loading} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, []);

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading ? <h1>Loading....</h1> : null}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};