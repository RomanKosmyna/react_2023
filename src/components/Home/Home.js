import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.Home}>
            <div>
                <h1>HOME PAGE</h1>
            </div>
            <div>
                <img src="../images/image.jpg" alt="random image"/>
            </div>
        </div>
    );
};

export {Home};