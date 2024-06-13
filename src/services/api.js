import axios from "axios";
import Usuario from "../pages/Usuario";

const api = axios.create({
 
    baseURL: 'http://www.webapiesperanca.online/webApi/'
    //baseURL: 'http://localhost:5130'

})

export const cadastrarUsuario = (Usuario) => axios.post(api);

export default api