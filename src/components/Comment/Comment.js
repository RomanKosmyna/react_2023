import css from './Comment.module.css';
import {Link} from "react-router-dom";
import {postService} from "../../services";
import {urls} from "../../configs";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={css.Comment}>
            <h3>{name} --- {postId}</h3>
            <h5>{id}</h5>
            <h4>{email}</h4>
            <p>{body}</p>
            <Link to={`/post/${postId.toString()}`}>Post Details</Link>
        </div>
    );
};

export {Comment};