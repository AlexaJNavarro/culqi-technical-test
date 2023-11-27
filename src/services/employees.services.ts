// api.service.ts

import axios from 'axios';

const BASE_URL = 'https://fepruebatecnicaculqi-backend-production.up.railway.app';

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export const getEmployees = async (token: string, limit: number, page: number) => {
    try {
        return await apiService.get(`/empleados?limit=${limit}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.log("Error => ", error)
        throw new Error();
    }
}
