import { createContext } from "react";

const ThemeContext = createContext({
    color: '',
    background: '',
    changeColor: () => { }
})

export default ThemeContext;