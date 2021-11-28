import axios from "axios";

const USUARIOS_API_BASE_URL = "http://localhost:8080/api/v1/usuarios"

class UsuariosService {

    getUsuarios(){
        return axios.get(USUARIOS_API_BASE_URL);
    }
    createUsuario(nuevousuario){
        return axios.post(USUARIOS_API_BASE_URL, nuevousuario);
    }
}

export default new UsuariosService()