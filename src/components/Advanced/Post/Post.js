const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <hr/>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
            <hr/>
        </div>
    );
};

export {Post};