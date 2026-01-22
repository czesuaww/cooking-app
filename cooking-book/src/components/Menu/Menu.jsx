import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import style from './Menu.module.css';
import useTheme from "../../hooks/useTheme";
import { NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ActionContainer = () => {
    const { textColor, themeColor } = useTheme();
    const [user, setUser] = useAuth(false);
    const logOut = () => setUser(false);

    return (
        <div className={style.container}>
            <FontAwesomeIcon className={style.icon} onClick={themeColor} icon={faBrush} style={{ color: textColor }} />
            <nav>
                <ul className={style.ulList}>
                    <li className={style.menuItem}>
                        <NavLink to='/' className={style.btn}>Home</NavLink>
                    </li>
                    {!user
                        ?
                        <>
                            <li className={style.menuItem}>
                                <NavLink to='login' className={style.btn}>Login</NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to='register' className={style.btn}>Register</NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li className={style.menuItem}>
                                <NavLink to='my-profile' className={style.btn}>My Profile</NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to='login' className={style.btn} onClick={logOut}>Logout</NavLink>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default ActionContainer;