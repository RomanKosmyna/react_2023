import React from 'react';
const Post = ({post, setPostDetails}) => {
    const {userId, id, title} = post;
    return (
        <div>
            <div>
                <hr/>
                <h3>Title: {title}. ID - {id}</h3>
                <h4>User ID - {userId}</h4>
                <button onClick={() => setPostDetails(post)}>More details</button>
                <hr/>
            </div>
        </div>
    );
};

export {Post};