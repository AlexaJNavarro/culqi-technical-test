import axios from 'axios';

const BASE_URL = 'https://fepruebatecnicaculqi-backend-production.up.railway.app';

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export const signIn = async (email: string, password: string) => {
    try {
        return await apiService.post(`/auth/login`, {
            correo: email,
            password: password
        });
    } catch (error) {
        console.log("Error => ", error)
        throw new Error();
    }
}
