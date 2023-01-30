import React, {useEffect, useState} from 'react';
import {axiosConfig} from "../../configs";
import {requestLinks} from "../../api";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosConfig.get(requestLinks.posts)
            .then(({data}) => setPosts(data))
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {posts.map(item => <Post key={item.id} post={item}/>)}
        </div>
    );
};

export {Posts};