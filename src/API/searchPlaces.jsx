import axios from 'axios';

export const searchPlaces = async (searchTerm) => {
  try {
    const response = await axios.get('http://localhost:5000/api/getplaces/', {
      params: {
        keyword: searchTerm
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
