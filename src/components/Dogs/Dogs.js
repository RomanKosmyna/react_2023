import React from 'react';

const Dogs = ({dogs}) => {

    return (
        <div>
            {dogs.map(dog => <div key={dog.id}>{dog.id} --- {dog.name}</div>)}
        </div>
    );
};

export {Dogs};