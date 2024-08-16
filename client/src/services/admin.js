import instance from "../axiosInstance";

// Soft delete a business
export const softDeleteBusiness = async (id) => {
  try {
    const response = await instance.delete(`/business/delete/${id}`);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Error in softDeleteBusiness:', error);
    const status = error.response ? error.response.status : null;
    const message = error.response ? error.response.data : 'An error occurred';
    return { message, status };
  }
};

// Soft restore a business
export const softRestoreBusiness = async (id) => {
  try {
    const response = await instance.post(`/business/restore/${id}`);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Error in softRestoreBusiness:', error);
    const status = error.response ? error.response.status : null;
    const message = error.response ? error.response.data : 'An error occurred';
    return { message, status };
  }
};


export const fetchAllBusinesses = async () => {
    try {
      const response = await instance.get(`/business/getAllBusiness`);
      return response.data; // Returns the list of AddBusinessDto objects
    } catch (error) {
      console.error('Error fetching businesses:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  };