import React,{Component} from 'react';
import Producto from './Producto';
class Productos extends Component{
    render(){
        return(  
            <div className="mt-5">
            <div className="row col-sm-12 col-md-12 col-xl-8 col-lg-9 m-auto">                
                        {Object.keys(this.props.productos).map(producto =>(
                            <Producto
                                key={producto}
                                producto={this.props.productos[producto]}                           
                            />
                        ))}
                    
            </div>            
            </div>
          
        )
    }
}

export default Productos;