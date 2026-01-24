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
                <h1>The Shared Table</h1>
                <p>
                    Our database grows with you. Be the first to share your secret recipe or search for inspiration from others!
                    <br />
                    Never lose a great taste again
                </p>
                <Arrow />
            </div>
        </div>
    );
};

export default Header;