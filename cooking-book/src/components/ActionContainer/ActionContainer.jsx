import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import style from './ActionContainer.module.css';
import Login from "../Login/Login";
import useTheme from "../../hooks/useTheme";

const ActionContainer = () => {
    const { textColor, themeColor } = useTheme();

    return (
        <>
            <FontAwesomeIcon className={style.icon} onClick={themeColor} icon={faBrush} style={{ color: textColor }} />
            <Login />
        </>
    )
}

export default ActionContainer;