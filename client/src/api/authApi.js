import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/users'

export const useRegister = () => {

    const register = async (userData) => {
        const response = await request(`${baseUrl}/register`, 'POST', userData);
        return response;
    };


    return {
        register,
    }

}
