import Axios from "axios";

const url = `${process.env.BASE_API_URL}/login`;
//dotenv , process lee env fichero y accede a var

export const isValidLogin = (login) => Axios.post
(url, login).then(response => {      
    return response.data;
})
