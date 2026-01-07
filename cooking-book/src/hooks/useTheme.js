import { useContext } from 'react';
import ThemeContext from '../components/context/ThemeContext';

const useTheme = () => {
    const { color, background, changeColor } = useContext(ThemeContext);

    const textColor = color;
    const bgColor = background;
    const themeColor = changeColor;

    return { textColor, bgColor, themeColor };
};

export default useTheme;