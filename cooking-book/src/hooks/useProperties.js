import { useContext } from "react";
import PropertiesContext from "../components/context/PropertiesContext";

const useProperties = () => {
    const context = useContext(PropertiesContext);

    return { ...context };
}

export default useProperties;