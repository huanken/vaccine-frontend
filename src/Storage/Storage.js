import React, { useState } from 'react';



const isRememberMe = () => {
    if (localStorage.getItem("isRememberMe") !== null && localStorage.getItem("isRememberMe") !== undefined) {
        // convert string to boolean and return result
        return JSON.parse(localStorage.getItem("isRememberMe"));
    }
    return true;
}

const setRememberMe = (isRememberMe) => {
    localStorage.setItem("isRememberMe", isRememberMe);
}

const setItem = (key, value) => {
    if (isRememberMe()) {
        localStorage.setItem(key, value);
    } else {
        sessionStorage.setItem(key, value);
    }
}

const getItem = (key) => {
    if (isRememberMe()) {
        return localStorage.getItem(key);
    }
    return sessionStorage.getItem(key);
}

const removeItem = (key) => {
    if (isRememberMe()) {
        localStorage.removeItem(key);
    } else {
        sessionStorage.removeItem(key);
    }
}

const setToken = (token) => {
    setItem("token", token);
};

const removeToken = () => {
    removeItem("token");
};

const getToken = () => {
    return getItem("token");
}

const getRole = () => {
    return getItem("roles");
}

const isAuth = () => {
    return getToken() !== null && getToken() !== undefined;
}

const isAuthor = () => {
    if (!Storage.getRole()) {
        return false;
    } else if (Storage.getRole().includes("ROLE_ADMIN")) {
        return true;
    }
    return false;
}

const setUserInfo = (user) => {
    setItem("fullname", user.fullname);
    setItem("username", user.username);
    setItem("email", user.email);
    setItem("roles", user.roles);
    setItem("status", user.status);
}

const getUserInfo = () => {
    return {
        "fullname": getItem("fullname"),
        "username": getItem("username"),
        "email": getItem("email"),
        "roles": getItem("roles"),
        "status": getItem("status"),
    };
}

const removeUserInfo = () => {
    removeItem("fullname");
    removeItem("username");
    removeItem("email");
    removeItem("roles");
    removeItem("status");
};

// export
const Storage = { isAuthor, isRememberMe, setRememberMe, setToken, getRole, getToken, removeToken, isAuth, setUserInfo, getUserInfo, removeUserInfo };
export default Storage;