import style from './Container.module.css';
import Menu from '../Menu/Menu';
import useTheme from '../../hooks/useTheme';

const Container = (props) => {
    const { textColor, bgColor } = useTheme();

    return (
        <div id='container' className={style.container} style={{ color: textColor, background: bgColor }}>
            <Menu />
            {props.children}
        </div>
    )
}

export default Container;