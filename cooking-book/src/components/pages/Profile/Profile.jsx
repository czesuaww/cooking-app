import { NavLink, Outlet } from 'react-router';
import style from '../Profile/Profile.module.css';
import useTheme from '../../../hooks/useTheme';

const Profile = () => {
    const { textColor, bgColor, formBorder } = useTheme();

    return (
        <div className={style.profileCard} style={{ color: textColor, background: bgColor, border: `2px solid ${formBorder}` }}>
            <h1 className={style.profileTitle} style={{ color: textColor }}>My profile</h1>
            <ul className={style.ulContainer}>
                <li className={style.profileLink} >
                    <NavLink to='' end className={style.link}>Profile</NavLink>
                </li>
                <li className={style.profileLink}>
                    <NavLink to={'recepies'} className={style.link}>Recepies</NavLink>
                </li>
            </ul>
            <div className={style.outlet}>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile;