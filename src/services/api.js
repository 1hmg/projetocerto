import axios from "axios";

const api = axios.create({
 
    baseURL: 'http://www.webapiesperanca.online/webApi/'
    //baseURL: 'http://localhost:5130'

})

export default api