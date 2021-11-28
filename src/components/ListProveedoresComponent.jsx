import React, { Component } from 'react';
import ProveedoresService from '../services/ProveedoresService';

class ListProveedoresComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                proveedores: []
        }
        this.addProveedor = this.addProveedor.bind(this);
    }

    componentDidMount(){
        ProveedoresService.getProveedores().then((res) =>{

            this.setState({ proveedores: res.data});


        });
    }

    addProveedor(){
        this.props.history.push('/crear-proveedor');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">LISTADO DE PROVEEDORES</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addProveedor}> Crear Proveedor</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                
                                <th>NIT</th>
                                <th>Ciudad</th>
                                <th>Direccion</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Accion</th>

                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.proveedores.map(
                                    proveedor =>
                                    <tr key = {proveedor.nitproveedor}>
                                        <td>{proveedor.nitproveedor}</td>
                                        <td>{proveedor.ciudad_proveedor}</td>
                                        <td>{proveedor.direccion_proveedor}</td>
                                        <td>{proveedor.nombre_proveedor}</td>
                                        <td>{proveedor.telefono_proveedor}</td>

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

export default ListProveedoresComponent;