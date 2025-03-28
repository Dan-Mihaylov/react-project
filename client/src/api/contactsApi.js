import request from "../utils/requester";

const baseUrl = import.meta.env.VITE_FORM_URL ? import.meta.env.VITE_FORM_URL : 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY ? import.meta.env.VITE_FORM_ACCESS_KEY : '';
// const ACCESS_KEY = '2a26446f-738d-4391-bb27-76b45475fff';

export const useContactForm = () => {

    const submitForm = async (formData) => {
        
        formData.append('access_key', ACCESS_KEY);
        const data = Object.fromEntries(formData);
        const method = 'POST';

        const options = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
        };

        const response = await request(baseUrl, method, data, options);

        if (response.success) {
            console.log('Success', response);
        };
        return response;

    };

    return {
        submitForm,
    };
};
