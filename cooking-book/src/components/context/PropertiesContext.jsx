import { createContext } from "react";

const PropertiesContext = createContext({
    recipe: null,
    allPosts: null
})

export default PropertiesContext;