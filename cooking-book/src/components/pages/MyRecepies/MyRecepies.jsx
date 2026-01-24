import { Link } from "react-router";
import style from '../MyRecepies/MyRecepies.module.css';
import axios from "../../../axios";
import { useEffect, useState } from "react";
import objectToArrayWithId from "../../../lib/objects";
import useTheme from "../../../hooks/useTheme";

const MyRecepies = () => {
    const [recepies, setRecepies] = useState([]);
    const { textColor, bgColor } = useTheme()

    const getData = async () => {
        const res = await axios.get('/recepies.json');
        setRecepies(objectToArrayWithId(res.data))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {recepies.length === 0
                ?
                <h1 className={style.title}>You don't have any new recepies</h1>
                :
                <div className={style.listContainer} >
                    <div className={style.listHeader} style={{ background: bgColor, color: textColor }}>
                        <span className={style.headerName}>Name</span>
                        <span className={style.headerOptions}>Options</span>
                    </div>

                    <div className={style.listBody} style={{ background: bgColor }}>
                        {recepies.map(recepie => (
                            <div key={recepie.id} className={style.row} >
                                <div className={style.title} style={{ color: textColor }}>
                                    {recepie.title}
                                </div>
                                <div className={style.actions}>
                                    <Link
                                        // to={`/my-profile/edit/${recepie.id}`}
                                        className={`${style.btn} ${style.editBtn}`}
                                    >
                                        EDIT
                                    </Link>
                                    <button
                                        className={`${style.btn} ${style.deleteBtn}`}
                                        onClick={() => console.log('Delete', recepie.id)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            <Link to='/my-profile/add-recepie' className={style.addBtn}>Add new recepie</Link>
        </div>
    )
}

export default MyRecepies;