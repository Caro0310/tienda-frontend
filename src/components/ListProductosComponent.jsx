import React, { Component } from 'react';
import ProductosService from '../services/ProductosService';

class ListProductosComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                productos: []
        }
        this.addProducto = this.addProducto.bind(this);
    }

    componentDidMount(){
        ProductosService.getProductos().then((res) =>{

            this.setState({ productos: res.data});


        });
    }

    addProducto(){
        this.props.history.push('/crear-producto');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">LISTADO DE PRODUCTOS</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addProducto}> Crear Producto</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                
                                <th>Codigo</th>
                                <th>IVA</th>
                                <th>NIT-Proveedor</th>
                                <th>Nombre</th>
                                <th>Precio Compra</th>
                                <th>Precio Venta</th>

                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.productos.map(
                                    producto =>
                                    <tr key = {producto.codigo_producto}>
                                        <td>{producto.codigo_producto}</td>
                                        <td>{producto.ivacompra}</td>
                                        <td>{producto.proveedores_nitproveedor}</td>
                                        <td>{producto.nombre_producto}</td>
                                        <td>{producto.precio_compra}</td>
                                        <td>{producto.precio_venta}</td>

                                    </tr>
                                )
                            }


                        </tbody>

                    </table>


                </div>

                
            </div>
        );
    }
}

export default ListProductosComponent;