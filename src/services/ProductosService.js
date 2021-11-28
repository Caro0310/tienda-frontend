import axios from "axios";

const PRODUCTOS_API_BASE_URL = "http://localhost:8080/api/v4/productos"

class ProductosService {

    getProductos(){
        return axios.get(PRODUCTOS_API_BASE_URL);
    }
    createProducto(nuevoproducto){
        return axios.post(PRODUCTOS_API_BASE_URL, nuevoproducto);
    }
}

export default new ProductosService()