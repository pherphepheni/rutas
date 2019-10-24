import React from  'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <header className="text-center jumbotron">
            <Link to={'/'}>
            <img src="./img/logo.png" alt={''}/>
            </Link>     
        </header>
    )
}
export default Header;