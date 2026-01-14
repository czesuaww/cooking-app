import { NavLink, Outlet } from 'react-router';
import style from '../Profile/Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profileCard}>
            <h1 className={style.profileTitle}>My profile</h1>
            <ul className={style.ulContainer}>
                <li className={style.profileLink}>
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