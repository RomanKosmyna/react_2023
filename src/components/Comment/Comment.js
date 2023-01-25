import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export {Comment};