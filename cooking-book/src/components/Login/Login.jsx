import style from './Login.module.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
    const [user, setUser] = useAuth();

    // const logIn = () => setUser(true);
    // const logOut = () => setUser(false);

    return (
        <div className={style.container}>
            {user
                ?
                <>
                    <Link to='/' className={style.logOut}>Log out</Link>
                    {/* <button className={style.logOut} onClick={logOut}>Log out</button> */}
                </>
                :
                <>
                    <Link to='login' className={style.logOut}>Log in</Link>
                    {/* <button className={style.logIn} onClick={logIn}>Log in</button> */}
                </>
            }
        </div>
    )
}

export default Login;