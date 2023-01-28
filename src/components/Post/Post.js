import css from './Post.module.css';

const Post = ({post}) => {
    const {userId, id, title} = post;

    return (
        <div className={css.Post}>
            <h2>{title}</h2>
            <h4>User ID: {userId} --- ID: {id}</h4>
        </div>
    );
};

export {Post};