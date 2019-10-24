import React,{Component} from 'react';
class Nosotros extends Component{
    render(){
        return(
            <div className="container">
                <form className="col-md-4 m-auto ">
                    <fieldset>
                    <div className="form-group">
                        <h5>Email address</h5>
                        <input type="email" className="form-control" placeholder="enter email"/>
                    </div>
                    <div className="form-group">
                        <h5>Password</h5>
                        <input type="password" className="form-control" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <h5>Messagge</h5>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Nosotros;