import style from './Container.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faBurger } from '@fortawesome/free-solid-svg-icons'

const Container = (props) => {
    return (
        <div id='container' className={style.container}>
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
            {props.children}
        </div>
    )
}

export default Container;