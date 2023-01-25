import {User} from "../User/User";
import './Users.css';

const Users = ({users}) => {

    return (
        <div className={'container'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};