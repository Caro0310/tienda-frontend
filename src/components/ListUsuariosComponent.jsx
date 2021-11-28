import React, { Component } from 'react';
import UsuariosService from '../services/UsuariosService';

class ListUsuariosComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                usuarios: []
        }
        this.addUsuario = this.addUsuario.bind(this);
    }

    componentDidMount(){
        UsuariosService.getUsuarios().then((res) =>{

            this.setState({ usuarios: res.data});


        });
    }

    addUsuario(){
        this.props.history.push('/crear-usuario');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">LISTA USUARIOS</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addUsuario}> Crear Ususario</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>                               
                                <th>Cedula</th>
                                <th>Email</th>
                                <th>Nombre</th>
                                <th>Password</th>
                                <th>Usuario</th>
                                <th>Acciones</th>

                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.usuarios.map(
                                    usuario =>
                                    <tr key = {usuario.cedula_usuario}>
                                        <td>{usuario.cedula_usuario}</td>
                                        <td>{usuario.email_usuario}</td>
                                        <td>{usuario.nombre_usuario}</td>
                                        <td>{usuario.password}</td>
                                        <td>{usuario.usuario}</td>
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
export default ListUsuariosComponent;