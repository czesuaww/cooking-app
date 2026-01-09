import style from '../AuthContainer/AuthContainer.module.css';
import useAuth from '../../hooks/useAuth';

const AuthContainer = () => {
    const [user, setUser] = useAuth();

    const logIn = () => setUser(true);
    const logOut = () => setUser(false);

    return (
        <div className={style.container}>
            {user
                ?
                <>
                    <button className={style.logOut} onClick={logOut}>Log out</button>
                </>
                :
                <>
                    <button className={style.logIn} onClick={logIn}>Log in</button>
                </>
            }
        </div>
    )
}

export default AuthContainer;