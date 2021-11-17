import Api from './Api';

const url = "/vaccines";

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
    return Api.get(`${url}`, {params: requestParams});
};

const create = (vaccineName,description,price,amount,expiryDate,manufacture) => {
    const body = {
        vaccineName,description,price,amount,
        expiryDate: expiryDate +" 00:00",
        manufacture
    }
    console.log(body);
    return Api.post(url, body);
};

const getById = (id) => {
    return Api.get(`${url}/${id}`);
};

const deleteById = (id) => {
    return Api.delete(`${url}/${id}`);
};

const update = (id, vaccineName,description,price,amount,expiryDate,manufacture) => {
    const body = {
        vaccineName,description,price,amount,
        expiryDate: expiryDate +" 00:00"
        ,manufacture
    }
    return Api.put(`${url}/${id}`, body);
};

// export
const api = { getAll,create,update,getById,deleteById}
export default api;