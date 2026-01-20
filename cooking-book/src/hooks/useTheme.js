import { useContext } from 'react';
import ThemeContext from '../components/context/ThemeContext';

const useTheme = () => {
    const { color, background, changeColor, border } = useContext(ThemeContext);

    return {
        textColor: color,
        bgColor: background,
        themeColor: changeColor,
        formBorder: border
    };
};

export default useTheme;