import instance from '../axiosInstance';

export async function getOrdersByBusiness(bId) {
    try {
        console.log(bId);
        const response = await instance.get(`/order/${bId}`);
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

export async function changeOrderStatus(oId, orderStatus) {
    console.log(orderStatus)
    try {
        const response = await instance.put(`/order/status/${oId}?status=${orderStatus}`);
        // console.log(bId);
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