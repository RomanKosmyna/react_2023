import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {userService} from "./services";
import {Comments} from "./components/Comments/Comments";
import {commentService} from "./services/commentService";
import {CommentForm} from "./components/CommentForm/CommentForm";

const App = () => {
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({data}) => setUsers([...data]))
    }, []);

    useEffect(() => {
       commentService.getAllComments()
            .then(({data}) => setComments([...data]))
    }, []);

  return (
      <div>
          <UserForm setUsers={setUsers}/>
          <hr/>
          <Users users={users}/>
          <div style={{'height': '10px', 'background': "black", 'marginTop': '20px'}}></div>
          <CommentForm setComments={setComments}/>
          <Comments comments={comments}/>
      </div>
  );
};

export default App;