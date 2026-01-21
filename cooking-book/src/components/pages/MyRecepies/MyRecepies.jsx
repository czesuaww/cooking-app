import { Link } from "react-router";
import style from '../MyRecepies/MyRecepies.module.css';

const MyRecepies = () => {
    return (
        <div>
            <h1 className={style.title}>You don't have any new recepies</h1>
            <Link to='/my-profile/add-recepie' className={style.addBtn}>Add new recepie</Link>
        </div>
    )
}

export default MyRecepies;