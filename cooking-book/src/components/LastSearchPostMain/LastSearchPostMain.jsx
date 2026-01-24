import { Link } from 'react-router';
import style from '../LastSearchPostMain/LastSearchPostMain.module.css';

const LastSearchPostMain = (props) => {
    return (
        <div className={style.banner}>
            <div className={style.content}>
                <h2 className={style.title}>
                    You recently searched: <span className={style.highlight}>{props.lastRec.title}</span>
                </h2>
                <p className={style.subtitle}>Do you want to see it again?</p>

                <div className={style.actions}>
                    <Link
                        to={`/last-recepie/${props.lastRec.id}`}
                        className={style.btnYes}
                    >
                        YES, SHOW ME
                    </Link>
                    <button
                        onClick={props.onNo}
                        className={style.btnNo}
                    >
                        NO, THANKS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LastSearchPostMain;