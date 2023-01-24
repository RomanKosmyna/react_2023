import React from 'react';

const MoreDetails = ({post}) => {

    return (
        <div>
            <h2>Title: {post.title}. ID - {post.id}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export {MoreDetails};