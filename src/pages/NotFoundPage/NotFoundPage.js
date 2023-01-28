import css from './NotFound.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.NotFound}>
            <h1>404</h1>
            <h2>Not found</h2>
        </div>
    );
};

export {NotFoundPage};