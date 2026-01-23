import { useContext, useDebugValue } from 'react';
import AuthContext from '../components/context/AuthContext';

const useAuth = () => {
    const { isLogged, logIn, logOut } = useContext(AuthContext);

    useDebugValue(isLogged, (user) => user ? 'Logged it' : 'Logged out');
    const setUser = (value, userData = null) => {
        console.log(userData, 'useAuth')
        if (value) {
            logIn();
            if (userData) window.localStorage.setItem('user', JSON.stringify(userData));
        } else {
            logOut();
            window.localStorage.removeItem('user');
        }
    }
    return [isLogged, setUser]
}

export default useAuth;