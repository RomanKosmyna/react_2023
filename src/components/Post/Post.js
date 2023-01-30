import React from 'react';

const Post = ({post}) => {
    const {id, body, title} = post;

    return (
        <div style={{width: '45%', background: 'darkblue', color: 'snow', margin: '10px', padding: '5px'}}>
            <h2>{title}</h2>
            <h4>{id}</h4>
            <p>{body}</p>
        </div>
    );
};

export {Post};