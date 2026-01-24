import Menu from '../Menu/Menu';
import useTheme from '../../hooks/useTheme';
import style from '../Container/Container.module.css'
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