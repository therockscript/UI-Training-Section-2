import axios from "axios";

const API = axios.create({
    // baseURL: "https://104.219.41.99/"
    baseURL: "https://tscdemo.araynatech.com/",
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

export default API;