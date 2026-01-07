import { createContext } from "react";

const AuthContext = createContext({
    isLogged: false,
    logIn: () => { },
    logOut: () => { }
});

export default AuthContext;