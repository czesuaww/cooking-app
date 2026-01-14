import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import style from './Menu.module.css';
import Login from "../Login/Login";
import useTheme from "../../hooks/useTheme";
import { Link } from 'react-router';

const ActionContainer = () => {
    const { textColor, themeColor } = useTheme();

    return (
        <div className={style.container}>
            <FontAwesomeIcon className={style.icon} onClick={themeColor} icon={faBrush} style={{ color: textColor }} />
            <nav>
                <ul>
                    <li>
                        <Link to='/' className={style.home}>Home</Link>
                    </li>
                    <li>
                        <Login />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ActionContainer;