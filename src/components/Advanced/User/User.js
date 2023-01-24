import React, {useState} from 'react';
import {Post} from "../Post/Post";

const User = ({user}) => {
    const {id, name, username, email} = user;
    const [posts, setPosts] = useState(null);

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPosts([value]))
    }

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={() => getPosts()}>Posts</button>
            {posts ? posts.map(post => <Post key={post.id} post={post}/>) : null}
        </div>
    );
};

export {User};