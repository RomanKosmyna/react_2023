import React, {useEffect, useState} from 'react';
import {userService} from "../../../services";
import {User} from "../User/User";

const Users = ({setUserId, userId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))
    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} userId={userId} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};