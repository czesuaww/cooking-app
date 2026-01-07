import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import style from './ThemeButton.module.css';
import AuthContainer from "../AuthContainer/AuthContainer";
import useTheme from "../../hooks/useTheme";

const ThemeButton = () => {
    const { textColor, themeColor } = useTheme();

    return (
        <>
            <FontAwesomeIcon className={style.icon} onClick={themeColor} icon={faBrush} style={{ color: textColor }} />
            <AuthContainer />
        </>
    )
}

export default ThemeButton;