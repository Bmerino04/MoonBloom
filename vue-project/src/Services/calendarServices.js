import axios from 'axios';

const baseURL = 'http://localhost:3000/calendarData';

export const getCalendarData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error al cargar los datos del calendario:', error);
    throw error;
  }
};
