import React, { Component } from 'react';
import UsuariosService from '../services/UsuariosService';

class CrearUsuarioComponent extends Component {

    constructor(props) {
        super(props)

        this.state ={
            cedula_usuario: '',
            email_usuario: '',
            nombre_usuario: '',
            password: '',
            usuario: ''
        }

        this.changeCedulaHandler = this.changeCedulaHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeUsuarioHandler = this.changeUsuarioHandler.bind(this);

        this.saveUsuario = this.saveUsuario.bind(this);

    }

    saveUsuario = (e) => {
        e.preventDefault();
        let nuevousuario = {cedula_usuario: this.state.cedula_usuario, email_usuario: this.state.email_usuario,
            nombre_usuario: this.state.nombre_usuario, password: this.state.password, usuario: this.state.usuario};
            console.log('usuarios => ' + JSON.stringify(nuevousuario));

        UsuariosService.createUsuario(nuevousuario).then(res =>{
            this.props.history.push('/usuarios');
        })
    }

    changeCedulaHandler= (event) => {
        this.setState({cedula_usuario: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email_usuario: event.target.value});
    }

    changeNombreHandler= (event) => {
        this.setState({nombre_usuario: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeUsuarioHandler= (event) => {
        this.setState({usuario: event.target.value});
    }

    cancel(){
        this.props.history.push('/usuarios');
    }

    render() {
        return (
            <div>
                <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3"></div>
                                <h3 className = "text-center"> Nuevo Usuario</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Cedula: </label>
                                            <input placeholder ="Cedula" name="cedula" className="form-control"
                                                value={this.state.cedula_usuario} onChange={this.changeCedulaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder ="Email" name="email" className="form-control"
                                                value={this.state.email_usuario} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nombre: </label>
                                            <input placeholder ="Nombre" name="nombre" className="form-control"
                                                value={this.state.nombre_usuario} onChange={this.changeNombreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder ="Password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Usuario: </label>
                                            <input placeholder ="Usuario" name="usuario" className="form-control"
                                                value={this.state.usuario} onChange={this.changeUsuarioHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveUsuario}>Guardar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CrearUsuarioComponent;