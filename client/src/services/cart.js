import instance from "../axiosInstance";



export async function addToCart(cartDto) {
    try {
        const response = await instance.post('/order/add-to-cart', cartDto);
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        console.log(error);
        const status = error.response ? error.response.status : null;
        const message = error.response ? error.response.data.message : 'An error occurred';
        return { message, status };
    }
}


export async function fetchCart() {
    try {
        const response = await instance.get('/order/cart');
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        console.log(error);
        const status = error.response ? error.response.status : null;
        const message = error.response ? error.response.data.message : 'An error occurred';
        return { message, status };
    }
}

export async function placeOrder(id, body) {
    try {
        const response = await instance.post(`/order/place-order/${id}`, body);
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        console.log(error);
        const status = error.response ? error.response.status : null;
        const message = error.response ? error.response.data.message : 'An error occurred';
        return { message, status };
    }
}