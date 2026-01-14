import BestPost from "../../BestPost/BestPost";
import Searchbar from "../../Searchbar/Searchbar";
import Posts from "../../Posts/Posts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import style from '../Home/Home.module.css';

const Home = ({ theme }) => {
    return (
        <>
            <h1 className={style.header}>We have more than enough of what you looking for</h1>
            <div className={style.aboutContainer}>
                <div className={style.iconItem}>
                    <FontAwesomeIcon icon={faBowlFood} className={style.icons} style={{ color: "#f0bc00", }} />
                    <p>Soups and main courses</p>
                </div>
                <div className={style.iconItem}>
                    <FontAwesomeIcon icon={faPizzaSlice} className={style.icons} style={{ color: "#f0bc00", }} />
                    <p>Pizza and italian</p>
                </div>
                <div className={style.iconItem}>
                    <FontAwesomeIcon icon={faBurger} className={style.icons} style={{ color: "#f0bc00", }} />
                    <p>Burgers and fast food</p>
                </div>
            </div>
            <BestPost />
            <Searchbar />
            <div className="empty-state">
                <h2 style={{ color: theme.color, background: theme.background }}>🔍Enter the name of the dish</h2>
                <p style={{ color: theme.color, background: theme.background }}>We'll find the best recipes for you!</p>
            </div>
        </>
    )
}

export default Home;