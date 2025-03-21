import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/users'
const authKey = 'auth';

export const useAuth = () => {
    const options = {
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem(authKey)).accessToken
        }
    };

    return {
        options
    };
};

export const useRegister = () => {

    const register = async (userData) => {
        const response = await request(`${baseUrl}/register`, 'POST', userData);
        return response;
    };


    return {
        register,
    };

};

export const useLogin = () => {

    const login = async (email, password) => {
        const response = await request(`${baseUrl}/login`, 'POST', {email, password});
        return response;
    };

    return {
        login,
    };

};

export const useLogout = () => {
    const { options } = useAuth();

    const logout = async () => {
        const response = await request(`${baseUrl}/logout`, 'GET', null, options);
        return response;
    };

    return {
        logout,
    }
};
