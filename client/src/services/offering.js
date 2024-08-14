import instance from '../axiosInstance';

export async function getLatestOfferings(bId, type) {
    try {
        const response = await instance.get(`/offering/${type}/${bId}`);
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

export async function getOfferingDetails(id) {
    try {
        const response = await instance.get(`/offering/${id}`);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}

export async function addOffering(offering, type, img, bId) {
    const json = JSON.stringify(offering);
    const blob = new Blob([json], {
        type: 'application/json'
    });

    let formData = new FormData();
    formData.append("img", img);
    formData.append("newProduct", blob);
    try {
        const response = await instance.post(`/offering/${type}/${bId}`, formData);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}

export async function updateOffering(offering, type, img, oId) {
    const json = JSON.stringify(offering);
    const blob = new Blob([json], {
        type: 'application/json'
    });

    let formData = new FormData();
    formData.append("img", img);
    formData.append("newProduct", blob);
    try {
        const response = await instance.put(`/offering/${type}/${oId}`, formData);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}