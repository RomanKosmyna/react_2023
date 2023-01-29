import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

const PostDetails = () => {
    const {id} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(id)
            .then(({data}) => setPost(data))
    }, [id]);

    return (
        <div>
            {post ? <Post key={post.id} post={post}/> : null}
        </div>
    );
};

export {PostDetails};