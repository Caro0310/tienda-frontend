import axios from "axios";

const CLIENTES_API_BASE_URL = "http://localhost:8080/api/v2/clientes"

class ClientesService {

    getClientes(){
        return axios.get(CLIENTES_API_BASE_URL);
    }
    createCliente(nuevocliente){
        return axios.post(CLIENTES_API_BASE_URL, nuevocliente);
    }
}

export default new ClientesService()