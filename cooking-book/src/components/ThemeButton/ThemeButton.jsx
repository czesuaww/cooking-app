import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from "../context/ThemeContext";
import style from './ThemeButton.module.css';
import AuthContainer from "../AuthContainer/AuthContainer";
const ThemeButton = () => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <FontAwesomeIcon className={style.icon} onClick={theme.changeColor} icon={faBrush} style={{ color: theme.color }} />
            <AuthContainer />
            {/* <button onClick={theme.changeColor}>Change Color</button> */}
        </>
    )
}

export default ThemeButton;