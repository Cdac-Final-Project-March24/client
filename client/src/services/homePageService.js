import instance from '../axiosInstance';

// const API_BASE_URL = 'http://localhost:8080'; // Update this with your backend base URL

// Fetch top products
export const fetchTopBusinesses = async (latitude, longitude) => {
  try {
    const response = await instance.get(`/business/top-business`, {
      params: { latitude, longitude }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching top products:", error);
    throw error;
  }
};

// Fetch top services
export const fetchTopServices = async (latitude, longitude) => {
  try {
    const response = await instance.get(`/offering/top-services`, {
      params: { latitude, longitude }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching top services:", error);
    throw error;
  }
};

// Fetch top businesses
export const fetchTopProducts = async (latitude, longitude) => {
  try {
    const response = await instance.get(`/offering/top-products`, {
      params: { latitude, longitude }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching top businesses:", error);
    throw error;
  }
};

