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
    return [authContext.logged, setUser]
}

export default useAuth;