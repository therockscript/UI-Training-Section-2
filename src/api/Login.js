import API from "./API";

const login = async (username, password) => {
    const request_payload = {
        username: username,
        password: password
    }
    try {
        const response = await API.post("/api/v2/login", request_payload);
        return response;
    } catch(error) {
        console.log("login ==> ", error);
        return false;
    }
};

const apis = {
    login: login
}

export default apis;