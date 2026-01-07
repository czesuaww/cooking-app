import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import style from '../AuthContainer/AuthContainer.module.css';

const AuthContainer = () => {
    const auth = useContext(AuthContext);

    return (
        <div className={style.container}>
            {auth.isLogged
                ?
                <button className={style.logOut} onClick={auth.logOut}>Wyloguj</button>
                :
                <button className={style.logIn} onClick={auth.logIn}>Zaloguj</button>
            }
        </div>
    )

}

export default AuthContainer;