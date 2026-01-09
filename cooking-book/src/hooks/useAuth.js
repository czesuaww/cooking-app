import { useContext, useDebugValue } from 'react';
import AuthContext from '../components/context/AuthContext';

const useAuth = () => {
    const { isLogged, logIn, logOut } = useContext(AuthContext);
    const user = isLogged;
    useDebugValue(user, (user) => user ? 'Logged it' : 'Logged out');

    const setUser = (value) => {
        if (value) {
            logIn();
        } else {
            logOut();
        }
    }
    return [user, setUser]
}

export default useAuth;