import { createContext } from "react";

const PropertiesContext = createContext({
    recipe: null,
    onSearch: () => { },
    posts: null
})

export default PropertiesContext;