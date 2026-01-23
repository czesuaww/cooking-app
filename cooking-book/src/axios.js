import axios from "axios";

const instance = axios.create({ baseURL: 'https://cooking-react-811f4-default-rtdb.europe-west1.firebasedatabase.app' })

export default instance