import Api from './Api';

const url = "/locations";

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


const create = (locationName) => {
    const body = {
        locationName
    }
    return Api.post(url, body);
};

const getById = (id) => {
    return Api.get(`${url}/${id}`);
};

const deleteById = (id) => {
    return Api.delete(`${url}/${id}`);
};

const update = (id, locationName) => {
    const body = {
        locationName
    }
    return Api.put(`${url}/${id}`, body);
};


// export
const api = { getAll ,create , getById,deleteById,update }
export default api;