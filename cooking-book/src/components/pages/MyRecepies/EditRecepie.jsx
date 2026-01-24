import { useNavigate, useParams } from "react-router";
import axios from "../../../axios";
import RecepieForm from "./RecepieForm";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import style from '../MyRecepies/EditRecepie.module.css'

const EditRecepie = () => {
    const navigate = useNavigate()
    const [user] = useAuth();
    const { id } = useParams();
    const [recepie, setRecepie] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`/recepies/${id}.json`);
            setRecepie(res.data);
        }
        getData();
    }, [id])

    const editRecepie = async (values) => {
        await axios.put(`/recepies/${id}.json`, { ...values, userId: user.localId });
        navigate('/my-profile/recepies')
    }

    if (!recepie) return <h1 className={style.title}>Loading...</h1>

    return (
        <div className={style.container}>
            <h1>Edit recepie</h1>
            <RecepieForm initialValues={recepie} onSubmit={editRecepie} />
        </div>
    )
}

export default EditRecepie;