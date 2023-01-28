import css from './ToDo.module.css';
const ToDo = ({todo}) => {
    const {userId, id, title} = todo;
    return (
        <div className={css.ToDo}>
            <h3>{title}</h3>
            <p>User ID --- {userId}</p>
            <p>ID --- {id}</p>
        </div>
    );
};

export {ToDo};