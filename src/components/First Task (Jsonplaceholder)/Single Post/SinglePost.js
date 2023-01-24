import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";


const SinglePost = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById().then(value => value.data).then(value => setPost(value))
    })
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {SinglePost};