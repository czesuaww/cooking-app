import axios from "axios";

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: 'AIzaSyBTxbzIgpqPKh9dHL-v6xEGBdt36KOxrJg'
    }
})

export default instance