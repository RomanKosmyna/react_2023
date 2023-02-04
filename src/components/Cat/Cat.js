import React from 'react';

const Cat = ({cat, dispatch}) => {

    return (
        <div>
            {cat.id} --- {cat.name}
            <button onClick={dispatch({type: 'delete_cat', payload: cat.id})}>Delete this cat</button>
        </div>
    );
};

export {Cat};