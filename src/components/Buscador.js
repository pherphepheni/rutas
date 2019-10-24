import React,{Component} from 'react';
class Buscador extends Component{
    
    leerDatos=(e)=>{
        const termino = e.target.value;

        this.props.busqueda(termino);
    }

    render(){
        return(
                <React.Fragment>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Buscar.." onChange={this.leerDatos}/>
                </form>     

                </React.Fragment>
               
          
           
        )
    }
}
export default Buscador;