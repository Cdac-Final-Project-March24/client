// import axios from "axios";
// import config from "../config";
import instance from '../axiosInstance';

export async function register(name, description, cover) {
    const json = JSON.stringify({ name, description });
    const blob = new Blob([json], {
        type: 'application/json'
    });

    let formData = new FormData();
    formData.append("img", cover);
    formData.append("newBusiness", blob);
    try {
        const response = await instance.post(`/business/register`, formData);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}

export async function getBusiness() {
    try {
        const response = await instance.get(`/business/owner`);
        sessionStorage.setItem("business", JSON.stringify(response.data));
        return response.status;
    } catch (e) {
        console.log(e);
        return e.response.status;
    }
}

//get individual business page details. 

// Fetch business details by ID
export const fetchBusinessDetails = async (id) => {
    try {
      // Make a GET request to fetch business details
      console.log(id);
      const response = await instance.get(`/business/business-details/${id}`);
      const status = response.status;
      return {...response.data,status};
    } catch (error) {
      console.error('Error fetching business details:', error);
      throw error;
    }
  };

  export async function getMostPreferredOfferings(bId, type) {
    try {
        const response = await instance.get(`/business/${type}/${bId}`);
        const status = response.status;
        const data = response.data;
        return { data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }

    


}

export async function getReviews(bId) {
    try {
        const response = await instance.get(`/feedback/${bId}`);
        const status = response.status;
        const data = response.data;
        return { data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }

}