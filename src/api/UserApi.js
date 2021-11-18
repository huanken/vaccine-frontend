import Api from './Api';

const url = "/users";

const existsByEmail = (email) => {
    return Api.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
    return Api.get(`${url}/userName/${username}`);
};

const create = ( username, password,typeAccount , fullname, age, address, phone, email, citizenId, prioritize) => {
    
    var arr = [typeAccount];
    const body = {
        username: username,
        password: password,
        fullname: fullname,
        roles: arr,
        age: age,
        address: address,
        phone: phone,
        email: email,
        citizenId: citizenId,
        prioritize: prioritize
    }
    return Api.post(url, body);
};

// const resendEmailToActiveAccount = (email) => {
//     const requestParams = {
//         email: email
//     }

//     return Api.get(`${url}/userRegistrationConfirmRequest`, { params: requestParams });
// };

const requestResetPassword = (email) => {
    const requestParams = {
        email: email
    }

    return Api.get(`${url}/resetPasswordRequest`, { params: requestParams });
};

const resendEmailToResetPassword = (email) => {
    const requestParams = {
        email: email
    }

    return Api.get(`${url}/resendResetPassword`, { params: requestParams });
};

// const resetPassword = (token, newPassword) => {
//     const requestParams = {
//         token: token,
//         newPassword: newPassword
//     }

//     return Api.get(`${url}/resetPassword`, { params: requestParams });
// };

const getProfile = () => {
    return Api.get(`${url}/profile`);
};

const changeProfile = (avatarUrl) => {
    const body = {
        avatarUrl: avatarUrl
    }
    return Api.put(`${url}/profile`, body);
};

const getAll = (page, size,sortField, sortType, search) => {    
    // default parameters
    if (sortField === null || sortField === undefined || sortType === null || sortType === undefined) {
        sortField = "id";
        sortType = "asc";
    }

    const requestParams = {
        page,
        size,
        sort: `${sortField},${sortType}`,
        search,
    }
    // return Api.get(`${url}`);
    return Api.get(`${url}`, {params: requestParams});
};

const getById = (id) => {
    return Api.get(`${url}/${id}`);
};

const deleteById = (id) => {
    return Api.delete(`${url}/${id}`);
};

const deleteByIds = (ids) => {
    return Api.delete(`${url}/${ids.toString()}`);
};

const update = (id,username, password, fullname, age, address, phone, email, citizenId) => {
    const body = {
        username, 
        password, 
        fullname, 
        age, 
        address, 
        phone, 
        email, 
        citizenId
    }
    return Api.put(`${url}/${id}`, body);
};
// export
const api = { requestResetPassword,resendEmailToResetPassword,getAll,existsByEmail, existsByUsername, create, getProfile, changeProfile, update,getById,deleteById,deleteByIds }
export default api;