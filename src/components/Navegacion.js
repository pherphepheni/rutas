import React from 'react';
import {Link} from 'react-router-dom';
import Buscador from './Buscador';
const Navegacion = (props) =>{
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/rutas/'} className="nav-link">Inicio<span className="sr-only"></span></Link>
                           
                        </li>
                        <li className="nav-item">
                        <Link to={'/rutas/productos'} className="nav-link">Productos<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/rutas/nosotros'} className="nav-link">Nosotros<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                        <Buscador
                            busqueda = {props.busqueda}
                        />
                </div>

            </nav>
        </div> 
    )
}
export default Navegacion;