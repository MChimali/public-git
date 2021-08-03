import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

export const getAccounts = () => Axios.get(url).then(response => {
    return response.data;
})