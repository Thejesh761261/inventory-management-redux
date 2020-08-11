import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Header extends React.Component {


    render() { 
        const menuitem = {
            color:"red",
            display:'inline',
            padding: '10px',
            margin: '5px'
        }


        return (  
            <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'lightgray'}}>
            <b className="navbar-brand" tabIndex="-1" style={{fontFamily:"sans-serif"}} >Inventory Management</b>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item" style={menuitem}>
                        <Link to="/register" className="nav-link" style={{ textDecoration:'none',color:"black"}}>Register</Link>
                    </li>
                    <li className="nav-item" style={menuitem}>
                        <Link to="/login" className="nav-link" style={{ textDecoration:'none',color:"black"}}>Login</Link>
                    </li>
                    <li className="nav-item" style={menuitem}>
                        <Link to="" className="nav-link" style={{ textDecoration:'none',color:"black"}}>News</Link>
                    </li>
                    <li className="nav-item" style={menuitem}>
                        <Link to="" className="nav-link" style={{ textDecoration:'none',color:"black"}}>About</Link>
                    </li>
                </ul>
                </div>
               
          
            </nav>
            </div>

        );
    }
}
 
export default Header;