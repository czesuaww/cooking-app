import objectToArrayWithId from "./objects";
import axios from "../axios";

export async function random() {
    try {
        const res = await axios.get('/recepies.json');
        const transformedData = objectToArrayWithId(res.data);

        if (transformedData.length > 0) {
            const random = transformedData[Math.floor(Math.random() * transformedData.length)];
            return random
        }
    } catch (e) {
        console.err("Error fetching data", e);
    }
}
