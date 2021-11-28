import React, { Component } from 'react';
import ClientesService from '../services/ClientesService';

class ListClientesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                clientes: []
        }
        this.addCliente = this.addCliente.bind(this);
    }

    componentDidMount(){
        ClientesService.getClientes().then((res) =>{

            this.setState({ clientes: res.data});


        });
    }

    addCliente(){
        this.props.history.push('/crear-cliente');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">LISTADO DE CLIENTES</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addCliente}> Crear Cliente</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                
                                <th>Cedula</th>
                                <th>Direccion</th>
                                <th>Email</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Accion</th>

                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.clientes.map(
                                    cliente =>
                                    <tr key = {cliente.cedula_cliente}>
                                        <td>{cliente.cedula_cliente}</td>
                                        <td>{cliente.direccion_cliente}</td>
                                        <td>{cliente.email_cliente}</td>
                                        <td>{cliente.nombre_cliente}</td>
                                        <td>{cliente.telefono_cliente}</td>

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

export default ListClientesComponent;