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
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor:"#404040"}}>
                  <a className="navbar-brand" style={{color:"wheat"}}>Inventory Management</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText" style={{padding:"1%"}}>
                    <ul className="navbar-nav mr-auto nav1">
                      <li className="nav-item active"> 
                        {/* <a className="nav-link">Home <span class="sr-only">(current)</span></a> */}
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/register" className="nav-link">SignUp</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">News</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">About</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>

        );
    }
}
 
export default Header;