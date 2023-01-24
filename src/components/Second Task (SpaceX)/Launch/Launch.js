import React from 'react';

const Launch = ({launch}) => {
    const {id, name, static_fire_date_utc, links:{patch:{small}}} = launch;

    if (static_fire_date_utc === null || !static_fire_date_utc.includes('2020')) {
        return (
            <div>
                <h2>{name}</h2>
                <h5>ID - {id}</h5>
                <h4>Launch time - {static_fire_date_utc}</h4>
                <img src={small} alt={name}/>
            </div>
        );
    } else {
        return null
    }
};

export {Launch};