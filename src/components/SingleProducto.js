import React from 'react';
const SingleProducto = (props)=>{
    const {descripcion,imagen,nombre} = props.singleproducto;
    return(
            <div className="container col col-md-4 col-xl-4 col-md-6 m-auto">
                   <h4 className="text-center">{nombre}</h4> 
                    <img className="row m-auto" src={ `/img/${imagen}.png`} alt={nombre}/>
                        <p>{descripcion}</p>

            </div>
   
            
        )
}


export default SingleProducto;