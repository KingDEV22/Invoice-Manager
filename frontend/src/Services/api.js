import axios from 'axios';

const url = 'http://localhost:8080/Backend/data'

export const getLedger = async () => {
    return await axios.get(url);
}