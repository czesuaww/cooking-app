import img1 from '../../images/header/header1.jpg';
import img2 from '../../images/header/header2.jpg';
import img3 from '../../images/header/header3.jpg';
import styles from './Header.module.css';
import Arrow from '../Arrow/Arrow';

const Header = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.slide}>
                <img src={img1} alt="picture one" />
            </div>
            <div className={styles.slide}>
                <img src={img2} alt="picture two" />
            </div>
            <div className={styles.slide}>
                <img src={img3} alt="picture three" />
            </div>
            <div className={styles.heroText}>
                <h1>Looking for some recepies?</h1>
                <p>You've come to the perfect place.
                    <br />
                    I invite you to search for the best recipes
                </p>
                <Arrow />
            </div>
        </div>
    );
};

export default Header;