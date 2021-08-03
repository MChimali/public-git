import Axios from "axios";

const urlAccount = `${process.env.BASE_API_URL}/account`;
const urlTransfer = `${process.env.BASE_API_URL}/transfer`;

export const getAccounts = () => Axios.get(urlAccount).then(response => {
    return response.data;
})

export const insertTransfer = transfer => Axios.post(urlTransfer, transfer).then(response => {
    return response.data;
})

