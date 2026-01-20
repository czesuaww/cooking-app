import { createContext } from "react";

const ThemeContext = createContext({
    color: '',
    background: '',
    changeColor: () => { },
    border: ''
})

export default ThemeContext;