import { useAuth } from "./authApi";
import request from "../utils/requester";

const baseUrl = import.meta.env.VITE_SERVER_URL
    ? `${import.meta.env.VITE_SERVER_URL}/data/properties`
    : 'http://localhost:3030/data/properties';


const explorePageSize = 3;
const latestPageSize = 2;
export const listingsPageSize = 3;

export const useProperty = () => {
    const { options } = useAuth();

    const getProperty = async (propId) => {
        // Will return 404 if collection or entry does not exist.
        const response = await request(`${baseUrl}/${propId}`, 'GET');
        if (response.error || response.status === 404) {
            return {
                'error': true,
                'message': response.error ? response.message : 'Collection or entry does not exist.'
            }
        };
        return response;
    };

    const getProperties = async (searchParams) => {
        // Will return 404 if collection does not exist.
        const response = await request(`${baseUrl}?${searchParams.toString()}`, 'GET');
        if (response.error || response.status === 404) {
            return {
                'error': true,
                'message': response.error ? response.message : 'Collection does not exist.'
            };
        };
        return response;
    };

    const getPropertiesByType = async (propertyType) => {

        const urlSearchParams = new URLSearchParams({
            where: `type="${propertyType}"`,
            sortBy: '_createdOn desc',
            pageSize: explorePageSize,
        });

        const response = await request(`${baseUrl}?${urlSearchParams.toString()}`, 'GET');
        if (response.error || response.status === 404) {
            return {
                'error': true,
                'message': response.error ? response.message : 'Collection does not exist.'
            };
        };
        return response;
    };

    const createProperty = async (propData) => {
        const response = await request(baseUrl, 'POST', propData, options);
        return response;
    };

    const updateProperty = async (propId, propertyData) => {
        const response = await request(`${baseUrl}/${propId}`, 'PUT', propertyData, options);
        return response;
    };

    return {
        getProperty,
        getProperties,
        getPropertiesByType,
        createProperty,
        updateProperty,
    };
};

export const useLatestProperties = () => {

    const latestProperties = async (pageSize = latestPageSize) => {
        const urlSearchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: pageSize
        });

        const response = await request(`${baseUrl}?${urlSearchParams.toString()}`);
        if (response.error || response.status === 404) {
            return {
                'error': true,
                'message': response.error ? response.message : 'Collection does not exist.'
            };
        };
        return response;

    };

    return {
        latestProperties,
    };
};
