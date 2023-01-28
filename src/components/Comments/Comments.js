import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll()
        .then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {comments.map(item => <Comment key={item.id} comment={item}/>)}
        </div>
    );
};

export {Comments};