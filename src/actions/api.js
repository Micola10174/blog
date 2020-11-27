import axios from "axios";

export const api = {
    default:{
        client: axios.create({
            baseURL: 'http://localhost:5000/api',
            responseType: 'json'
        })
    }
};

export default api;
