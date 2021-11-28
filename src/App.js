import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route}from 'react-router-dom';
import ListUsuariosComponent from './components/ListUsuariosComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CrearUsuarioComponent from './components/CrearUsuarioComponent';
import ListClientesComponent from './components/ListClientesComponent';
import ListProveedoresComponent from './components/ListProveedoresComponent';
import ListProductosComponent from './components/ListProductosComponent';

function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
              <div className="container">
                  <Switch>
                    <Route path="/" exact component = {ListUsuariosComponent}></Route>
                    <Route path="/usuarios" component = {ListUsuariosComponent}></Route>
                    <Route path="/crear-usuario" component = {CrearUsuarioComponent}></Route>
                    <Route path="/clientes" component = {ListClientesComponent}></Route>
                    <Route path="/proveedores" component = {ListProveedoresComponent}></Route>
                    <Route path="/productos" component = {ListProductosComponent}></Route>
                  </Switch>
              </div>
            <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
