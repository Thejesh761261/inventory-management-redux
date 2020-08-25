import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


class Sidenav extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="sidebar">
                <Link to="/home"><div >Dashboard</div></Link> 
                <Link to="/products"><div>Product Details</div></Link>
               <Link to="/addProduct"><div >Add Product</div></Link>
               <Link to="/home"><div >Contact</div></Link>
              
             </div>
            
        );
    }
}
 
export default Sidenav;