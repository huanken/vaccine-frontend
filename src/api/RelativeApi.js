import Api from './Api';

const register = (fullname, age, address, citizenId, dateInjection) => {
        const body = {
        fullname: fullname,
        age: age,
        address: address,
        citizenId: citizenId,
        dateInjection: dateInjection +" 00:00",
    }
    return Api.post("relative", body);
};

// export
const api = { register }
export default api;