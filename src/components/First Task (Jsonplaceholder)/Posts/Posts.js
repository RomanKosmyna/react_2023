import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postService} from "../../../services/postService";
import {MoreDetails} from "../Post/MoreDetails";
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll()
           .then(value => value.data)
           .then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'container'}>
            <div className={'block'}>
                <h1>Posts:</h1>
                {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
            </div>
            <div className={'block'}>
                <h1>Post Details:</h1>
                {postDetails && <MoreDetails post={postDetails}/>}
                <hr/>
            </div>
        </div>
    );
};

export {Posts};

// з jsonplaceholder отримати всі пости в компоненту Posts.js +
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User) +
// Зробити кнопку вибора юзера, при натисканні на яку в Posts.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)