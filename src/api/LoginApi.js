import Api from './Api';


const login = (username, password) => {

    var body = {
        "username": username,
        "password": password
    }
    // body.append('username', username);
    // body.append('password', password);

    return Api.post("auth/login", body);
};

const register = ( username, password , fullname, age, address, phone, email, citizenId) => {
        const body = {
        username: username,
        password: password,
        fullname: fullname,
        age: age,
        address: address,
        phone: phone,
        email: email,
        citizenId: citizenId,
    }
    return Api.post("auth/register", body);
};

// export
const api = { login,register }
export default api;