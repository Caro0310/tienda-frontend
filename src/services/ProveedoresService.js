import axios from "axios";

const PROVEEDORES_API_BASE_URL = "http://localhost:8080/api/v3/proveedores"

class ProveedoresService {

    getProveedores(){
        return axios.get(PROVEEDORES_API_BASE_URL);
    }
    createProveedor(nuevoproveedor){
        return axios.post(PROVEEDORES_API_BASE_URL, nuevoproveedor);
    }
}

export default new ProveedoresService()