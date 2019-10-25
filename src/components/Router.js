import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import infoproductos from './datos.json';
import Header from './Header';
import Productos from './Productos';
import Nosotros from './Nosotros';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion.js';

class Router extends Component{

   constructor(props){
       super(props);
       this.state={
           productos : infoproductos,
           busqueda:''
       }
   }

   busqueda = (busqueda)=>{
       if(busqueda.length >3){
            this.setState({
                busqueda
            })
       }else{
        this.setState({
            busqueda :''
        })
       }
   }
    render(){

        let productos = [...this.state.productos];
        let busqueda = this.state.busqueda;
        let verProductos;

        if(busqueda !==''){
            verProductos=productos.filter(producto=>(
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !==-1
            ))
        }else{
            verProductos=productos;
        }

        return(        
            <BrowserRouter>
                <Header/>
                <Navegacion
                busqueda = {this.busqueda}/>
            <Switch>
            <Route exact path="/rutas/" render ={()=>(
                    <Productos
                    productos = {verProductos}
                   
                    />
                )}/>
                <Route exact path="/rutas/productos/" render ={()=>(
                    <Productos
                    productos = {verProductos}
                    />
                )}/>
                    <Route exact path="/rutas/productos/:id" render={(props)=>{
                       const id = props.location.pathname.replace('/rutas/productos/', '');
                       console.log(id)
                       return(
                           <SingleProducto
                            singleproducto = {verProductos[id]}                        
                           />
                       )
                    }}/>
                <Route exact path="/rutas/nosotros/" component = {Nosotros}/>

            </Switch>

            </BrowserRouter>
        )
    }
}

export default Router;