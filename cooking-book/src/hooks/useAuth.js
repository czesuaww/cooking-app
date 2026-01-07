import { useContext } from 'react';
import AuthContext from '../components/context/AuthContext';

const useAuth = () => {
    const authContext = useContext(AuthContext);

    const setUser = (value) => {
        if (value) {
            authContext.logIn();
        } else {
            authContext.logOut();
        }
    }
    return [authContext.isLogged, setUser]
}

export default useAuth;