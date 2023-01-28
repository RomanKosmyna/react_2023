import css from './Album.module.css';

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div className={css.Album}>
            <h3>{title}</h3>
            <p>User ID --- {userId}</p>
            <p>ID --- {id}</p>
        </div>
    );
};

export {Album};