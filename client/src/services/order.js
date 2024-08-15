import instance from '../axiosInstance';

export async function getOrdersByBusiness(bId) {
    try {
        const response = await instance.get(`/order/${bId}`);
        // console.log(bId);
        const status = response.status;
        const data = response.data;
        // console.log(response)
        return { data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}