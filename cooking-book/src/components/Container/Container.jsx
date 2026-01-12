import style from './Container.module.css';


import ActionContainer from '../ActionContainer/ActionContainer';
import useTheme from '../../hooks/useTheme';

const Container = (props) => {
    const { textColor, bgColor } = useTheme();

    return (
        <div id='container' className={style.container} style={{ color: textColor, background: bgColor }}>
            <ActionContainer />
            {props.children}
        </div>
    )
}

export default Container;