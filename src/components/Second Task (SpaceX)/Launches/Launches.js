import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [lauches, setLaunches] = useState([]);

    useEffect(() => {
        axios('https://api.spacexdata.com/v4/launches/')
            .then(value => value.data)
            .then(value => setLaunches([...value]))
    }, []);

    return (
        <div>
            {
                lauches.map(launch => <Launch key={launch.id} launch={launch}/>)
            }
        </div>
    );
};

export {Launches};