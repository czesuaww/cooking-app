import { Link } from "react-router";
import style from '../MyRecepies/MyRecepies.module.css';
import axios from "../../../axios";
import { useEffect, useState } from "react";
import objectToArrayWithId from "../../../lib/objects";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";

const MyRecepies = () => {
    const [user] = useAuth();
    const [recepies, setRecepies] = useState([]);
    const { textColor, bgColor } = useTheme()

    const deleteHandler = async (id) => {
        if (!window.confirm('Do you want to delete this recepie?')) return;

        try {
            await axios.delete(`recepies/${id}.json`)
            setRecepies(recepies.filter(x => x.id !== id))
        } catch (er) {
            console.error('Something went wrong', er)
        }

    }
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/recepies.json');
            const myRecepies = objectToArrayWithId(res.data).filter(recepie => recepie.userId === user.localId)
            setRecepies(myRecepies)
        }

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
                                        onClick={() => deleteHandler(recepie.id)}
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