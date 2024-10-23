import axios from 'axios';

const baseURL = 'http://localhost:3000/adviceData';

export const getadviceData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error al cargar los datos del consejo diario:', error);
    throw error;
  }
};