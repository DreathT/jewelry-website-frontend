import axios from 'axios';
import { BASE_URL } from './constant';

const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export { getAllProducts };