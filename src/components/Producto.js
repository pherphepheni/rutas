import React from 'react';
import {Link} from 'react-router-dom';
//const producto = ( {producto} ) =>
    const Producto = (props)=>{
        const {nombre,imagen,precio,id}= props.producto;
        return(
            <div className="card col-md-6 col-sm-12 mb-3">          
            <div className="card-body text-center">
            <h4 className="card-subtitle">{nombre}</h4>
          
           <Link to={`/productos/${id}`}>
             <img className="m-auto" src={`img/${imagen}.png`} alt={nombre}></img>
            <p>precio ${precio}</p>      
           </Link>   
        </div>
        </div>
        )
       
    }
export default Producto;