import { useNavigate } from "react-router";
import axios from "../../../axios";
import RecepieForm from "./RecepieForm";
import useAuth from "../../../hooks/useAuth";

const AddRecepie = () => {
    const navigate = useNavigate()
    const [user] = useAuth();

    const addRecepie = async (values) => {
        await axios.post('/recepies.json', { ...values, userId: user.localId });
        navigate('/my-profile/recepies')
    }

    return (
        <div>
            <RecepieForm onSubmit={addRecepie} />
        </div>
    )
}

export default AddRecepie;