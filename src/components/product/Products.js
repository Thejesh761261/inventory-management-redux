import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import deleteProduct from '../../actions/deleteProductBroadcast';
import { bindActionCreators } from 'redux';
import allProductsBroadcast from '../../actions/allProductsBroadcast';
import ReactTooltip from "react-tooltip";

var storeData = [];

class Products extends React.Component {
    state = { 
        products:[],
        tempProducts:[],
        multiSearchProducts:[],
        editId:0,
        editClicked:false,
        searchValue:'',
        tableView:true,
        categories:[],
        manufacturer:[],
        products1:[],
        select1:'',
        select2:'',
        select3:0
     }

     
  //    componentWillMount(){
  //      console.log(this.props.products)
  //     if(this.props.products === undefined){
  //         this.getAllProducts()
  //     }
  // }

//   getAllProducts=()=>{
//     axios.get('http://localhost:3000/products')
//         .then(res => {
//             console.log(res);
//             this.props.sendAllProducts(res.data)
//         }, err => {
//             console.log(err);
//         })
// }

     componentDidMount(){
       console.log("cmd")
      console.log(this.state.products)
       this.fetchProductDetails();
     }

    

     fetchProductDetails=()=>{
        // axios.get('http://localhost:3000/products')
        //   .then(response=>{
        //     console.log(response.data);
        //     this.setState({products:response.data});
        //     this.setState({tempProducts:response.data});
        //     this.setState({multiSearchProducts:response.data});
        //     this.getCategories();
        //     this.getManufacturers();
        //     console.log(this.state.tempProducts);
        //   },error=>{
        //     console.log(error)
        //   })
        if(this.props.products.length === 0){
          this.props.sendAllProducts();
        }
        
        console.log("Fetched")
        console.log(this.props.products)
        this.setState({products:storeData},()=>console.log(JSON.stringify(this.state.products)));
        console.log(storeData);
        this.getCategories();
        this.getManufacturers();
        console.log("getcategories")
        this.setState({tempProducts:this.props.products});
        this.setState({multiSearchProducts:this.props.products});
        
     }

     getCategories(){
      console.log("in categories");
        this.props.products.map(p=>this.state.categories.push(p.category));
        console.log(this.state.categories)
        let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
        this.setState({categories:arr});
        console.log(arr);  
     }

     getManufacturers(){
      this.props.products.map(p=>this.state.manufacturer.push(p.manufacturer));
      let arr= this.state.manufacturer.filter((value, index, self) => self.indexOf(value) === index)
      this.setState({manufacturer:arr});
      console.log(arr);  
   }

     deleteProduct=(event)=>{
        console.log(event.target.id);
        let id = event.target.id;
        // axios.delete('http://localhost:3000/products/'+id)
        //   .then(response=>{
        //     console.log("Deletion Success");
        //     this.fetchProductDetails();
        //   },error=>{
        //     console.log("error occurred");
        //   })
        this.props.deleteClicked(id);
        this.fetchProductDetails();
     }

     toggleHandler=(e)=>{

      this.setState({tableView:!(this.state.tableView)});

     }

     editHandler=(e)=>{
       console.log("in edit handler");
       this.setState({editId:e.target.id});
      this.setState({editClicked:true})
     }

     selectOneHandler=(e)=>{
       let sel = e.target.value;
       this.setState({select1:sel})
       this.setState({products:this.state.tempProducts})
      console.log(this.state.select1)
    }

    selectTwoHandler=(e)=>{
      this.setState({select2:e.target.value})
      this.setState({products:this.state.tempProducts})
      console.log(this.state.select2)
    }

    selectThreeHandler=(e)=>{
      this.setState({select3:parseFloat(e.target.value)})
      this.setState({products:this.state.tempProducts})
      console.log(this.state.select3)
    }

    selection=()=>{
      document.getElementById("manufacturer1").value="Choose Manufacturer";
      document.getElementById("category1").value="Choose Category";
      document.getElementById("ratings1").value="Choose Ratings";
      console.log(this.state.select1);
      console.log(this.state.select2);
      console.log(this.state.select3);
      if(this.state.select1==''&&this.state.select2==''&&this.state.select3===0){
        this.fetchProductDetails();
        
      }
      // else if(this.state.select1!=''&&this.state.select2!=''&&this.state.select3===0){
      //   this.fetchProductDetails();
      // }
      else if(this.state.select1==''&&this.state.select2==''&&this.state.select3!==0){
        let searchProd = this.state.tempProducts.filter(p=>{
          return p.rating>=this.state.select3
        })
        this.setState({products:searchProd});
      }else{
      
        let searchProd=this.state.tempProducts.filter(p=>{
          return p.category.toLowerCase().match(this.state.select1.toLowerCase())&&p.manufacturer.toLowerCase().match(this.state.select2.toLowerCase())&&p.rating>=this.state.select3;
        })
        this.setState({select1:'',select2:'',select3:0});
        this.setState({products:searchProd});
      }

    }

     categoryChangeHandler=(e)=>{
      document.getElementById("manufacturer").value="Choose Manufacturer";
      let value = e.target.value;
      if(value==="Choose Category"){
        this.fetchProductDetails();
      }else{
        let searchProd=this.state.multiSearchProducts.filter(p=>{
          return p.category.toLowerCase().match(value.toLowerCase());
        })
        // this.setState({multiSearchProducts:searchProd},()=>console.log(this.state.multiSearchProducts))
        this.setState({products:searchProd});
        this.setState({products1:searchProd});
      }

     }

     manufacturerChangeHandler=(e)=>{
      let value = e.target.value;
      let fullProducts = this.state.products1;
      console.log(fullProducts);
      if(value==="Choose Manufacturer"){
        this.fetchProductDetails();
      }else{
        let searchProd=fullProducts.filter(p=>{
          return p.manufacturer.toLowerCase().match(value.toLowerCase());
        })
        // this.setState({multiSearchProducts:searchProd})
        this.setState({products:searchProd},()=>console.log(this.state.products));
      }
     }

     search=(e)=>{
      document.getElementById("manufacturer").value="Choose Manufacturer";
      document.getElementById("category").value="Choose Category";
        let value=e.target.value;
        if(value==''){
          this.fetchProductDetails();
          
        }
        else{
        this.setState({searchValue: value});
        let searchProd=this.state.tempProducts.filter(p=>{
          return p.name.toLowerCase().match(value.toLowerCase())||p.vendor.toLowerCase().match(value.toLowerCase())||p.category.toLowerCase().match(value.toLowerCase())||p.manufacturer.toLowerCase().match(value.toLowerCase());
        })
        this.setState({products:searchProd});
      }
     }


     ratingSort=(e)=>{
      console.log(e.target.className);
      let sortValue = e.target.className;
      console.log(typeof(sortValue))
      console.log(this.state.Products);
      let sortedArray = this.state.tempProducts.sort((a,b)=>{
                console.log(sortValue)
        if(a.rating<b.rating){
          return 1;
        }
        if(a.rating>b.rating){
          return -1;
      }
      return 0;
      })
      console.log(sortedArray)
      this.setState({products:sortedArray});

    }

    priceSort=(e)=>{
      console.log(e.target.className);
      let sortValue = e.target.className;
      console.log(typeof(sortValue))
      console.log(this.state.Products);
      let sortedArray = this.state.tempProducts.sort((a,b)=>{
                console.log(sortValue)
        if(a.unitPrice>b.unitPrice){
          return 1;
        }
        if(a.unitPrice<b.unitPrice){
          return -1;
      }
      return 0;
      })
      console.log(sortedArray)
      this.setState({products:sortedArray});

    }

    stockSort=(e)=>{
      console.log(e.target.className);
      let sortValue = e.target.className;
      console.log(typeof(sortValue))
      console.log(this.state.Products);
      let sortedArray = this.state.tempProducts.sort((a,b)=>{
                console.log(sortValue)
        if(a.quantity>b.quantity){
          return 1;
        }
        if(a.quantity<b.quantity){
          return -1;
      }
      return 0;
      })
      console.log(sortedArray)
      this.setState({products:sortedArray});

    }



    render() { 
    //   if(sessionStorage.getItem("loggedInUser")===''){
    //     return <Redirect to={{ pathname : "/" }} />
    // }

      if(this.state.editClicked){
        this.setState({editClicked:false})
        console.log()
        return <Redirect to={{pathname:"/editProduct" ,state:{
          product:this.state.products.filter(p=>p.id==this.state.editId)
        }}}></Redirect>
      }
        return ( 
          
            <div style={{overflowY: "auto"}}>
     
        <InventoryHeader></InventoryHeader>
            <SideNav></SideNav>
            
               <div className="" style={{marginLeft:"16%",marginRight:"2%",marginTop:"1%"}}>
               <div> 
                   <span>
                       <h2 className="he1">Product Details</h2>
                       <hr></hr>
                   </span>
                  
                   <div className="flx" style={{justifyContent:"space-between"}}>
                   <button className="btn btn-info" style={{margin:"2rem"}} onClick={this.toggleHandler}>Toggle View</button>
                   <input type="search"  placeholder="Search....." style={{margin:"2rem"}} className="search" onChange={this.search} />&nbsp;

                       
                       {/* <select name="Category" id="category" className="form-control" style={{width:"15rem",display:"inline"}} onChange={this.categoryChangeHandler}>
                       <option value="Choose Category">Choose Category</option>
                          {this.state.categories.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>&nbsp;
                       <select name="Manufacturer" id="manufacturer" className="form-control" style={{width:"15rem",display:"inline"}} onChange={this.manufacturerChangeHandler}>
                       <option value="Choose Manufacturer">Choose Manufacturer</option>
                          {this.state.manufacturer.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select> */}

<select name="Category1" id="category1" className="form-control" style={{width:"15rem",display:"inline",margin:"2rem 0 0 2rem"}} onChange={this.selectOneHandler} >
                       <option value="Choose Category">Choose Category</option>
                          {this.state.categories.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>
                       <select name="Manufacturer1" id="manufacturer1" className="form-control" style={{width:"15rem",display:"inline",margin:"2rem 0 0 0"}} onChange={this.selectTwoHandler} >
                       <option value="Choose Manufacturer">Choose Manufacturer</option>
                          {this.state.manufacturer.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>
                          <select name="Ratings1" id="ratings1" className="form-control" style={{width:"15rem",display:"inline",margin:"2rem 2rem 0 0"}} onChange={this.selectThreeHandler}>
                            <option value="Choose Ratings">Choose Ratings</option>
                            <option value="1">Greater than or equal to 1</option>
                            <option value="2">Greater than or equal to 2</option>
                            <option value="3">Greater than or equal to 3</option>
                            <option value="4">Greater than or equal to 4</option>
                            <option value="5">Equal to 5</option>

                          
                          </select>


                         <button className="btn btn-success searchB" onClick={this.selection} style={{margin:"2rem"}}>Search</button>
                          
                       {/* <label>Product search </label>&nbsp; */}
                       {/* <input type="search"  placeholder="Search....." style={{float:"right",margin:"2rem"}} className="search" onChange={this.search} />&nbsp; */}

                       {/* <Link to="/addProduct"><button className="addB" >Add Product</button></Link> */}
                   </div>
                   {/* <div className="div2">
                   
                     <h5 style={{textDecoration:'underline'}}>Aggregation search</h5>
                       <select name="Category1" id="category1" className="form-control" style={{width:"15rem",display:"inline",margin:"2rem 0 0 2rem"}} onChange={this.selectOneHandler} >
                       <option value="Choose Category">Choose Category</option>
                          {this.state.categories.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>
                       <select name="Manufacturer1" id="manufacturer1" className="form-control" style={{width:"15rem",display:"inline",margin:"2rem 0 0 0"}} onChange={this.selectTwoHandler} >
                       <option value="Choose Manufacturer">Choose Manufacturer</option>
                          {this.state.manufacturer.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>
                          <select name="Ratings1" id="ratings1" className="form-control" style={{width:"15rem",display:"inline",margin:"2rem 2rem 0 0"}} onChange={this.selectThreeHandler}>
                            <option value="Choose Ratings">Choose Ratings</option>
                            <option value="1">Greater than or equal to 1</option>
                            <option value="2">Greater than or equal to 2</option>
                            <option value="3">Greater than or equal to 3</option>
                            <option value="4">Greater than or equal to 4</option>
                            <option value="5">Equal to 5</option>

                          
                          </select>


                         <button className="btn btn-success searchB" onClick={this.selection} style={{margin:"2rem"}}>Search</button>
                   </div> */}
                   <hr></hr>
               </div>
              {this.state.tableView && (
               <div className="d1">
                   <table>
                     <thead>
                       <tr>
                         {/* <th></th> */}
                         <th>Product Name</th>
                         <th>Manufacturer</th>
                         <th>Category</th>
                         <th>Vendor</th>
                         <th onClick={this.priceSort} className="unitPrice s1" data-tip data-for="price">Price per unit</th>
                         <th onClick={this.stockSort} className="quantity s1" data-tip data-for="stock">Available Stock</th>
                         <th>Size</th>
                         <th>Color</th>
                         <th>Repleneshment Value</th>
                         <th>Reorder Value</th>
                         <th onClick={this.ratingSort} className="rating s1" data-tip data-for="rating">Rating</th>
                         <th></th>
                         <th></th>
                         <ReactTooltip id="price" place="top" effect="solid">
                             Click to sort by price
                         </ReactTooltip>
                         <ReactTooltip id="stock" place="top" effect="solid">
                             Click to sort by stock 
                         </ReactTooltip>
                         <ReactTooltip id="rating" place="top" effect="solid">
                             Click to sort by ratings
                         </ReactTooltip>
                       </tr>
                     </thead>
                     <tbody>
                         {this.state.products.map(product=>{
                           return (
                             <tr>
                               {/* <td><input type="checkbox"></input></td> */}
                                <td>{product.name.toUpperCase()}</td>
                                <td>{product.manufacturer.toUpperCase()}</td>
                                <td>{product.category.toUpperCase()}</td>
                                <td>{product.vendor.toUpperCase()}</td>
                                <td>&#8377;{product.unitPrice}</td>
                                <td>{product.quantity}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.replenishment_value}</td>
                                <td>{product.reorder_value}</td>
                                <td>{product.rating}</td>
                                {/* <td><div style={{backgroundColor:product.color,borderRadius:"50%",height:"1rem",width:"1rem"}}></div></td> */}
                                <td><input type="button" id={product.id} value="Edit" className="b1" onClick={this.editHandler} /></td>
                                <td><input type="button" id={product.id} value="Delete" className="b1" onClick={this.deleteProduct} /></td>
                              </tr>
                           )
                         })}
                       
                       </tbody>
                     </table>
                     {/* <div className="pagination">
                              <p>&laquo;</p>
                              <p>1</p>
                              <p className="active">2</p>
                              <p>3</p>
                              <p>4</p>
                              <p>5</p>
                              <p>&raquo;</p>
                            </div> */}
                   </div>
                     )}
               </div>
          
           {!this.state.tableView && (
             
              <div className="container cards" >
              {this.state.products.map(product=>
                 (
                  
                    <div className="card" style={{boxShadow: "0px 10px 30px 0px rgba(153,153,153,0.4)"}}>
                      {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                      <div className="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <p className="card-text"><b>Name:</b> {product.name.toUpperCase()}</p>
                        <p className="card-text"><b>Manufacturer:</b> {product.manufacturer.toUpperCase()}</p>
                        <p className="card-text"><b>Category:</b> {product.category.toUpperCase()}</p>
                        <p className="card-text"><b>Vendor: </b>{product.vendor.toUpperCase()}</p>
                        <p className="card-text"><b>Price:</b> &#8377;{product.unitPrice}</p>
                        <p className="card-text"><b>Quantity: </b>{product.quantity}</p>
                        <p className="card-text"><b>Color: </b>{product.color}</p>
                        <p className="card-text"><b>Repleneshment value: </b>{product.replenishment_value}</p>
                        <p className="card-text"><b>Reorder Value: </b>{product.reorder_value}</p>
                        <p className="card-text"><b>Rating: </b>{product.rating}</p>
                        <button className="btn btn-success b1" style={{ margin:"2rem"}} id={product.id} value="Edit" onClick={this.editHandler}>Edit</button>
                        <button className="btn btn-success b1" id={product.id} value="Delete" onClick={this.deleteProduct}>Delete</button>
                      </div>
                  </div>
                 
                 )
              )}
               </div>
      
           )}
        </div>
       
          
     
         );
    }
}
 
function convertStoreToPropsForProductsContainer(store){
  console.log(store);
  storeData=store.products;
  console.log("Store data in products "+storeData);
  return {
    products:storeData
  }
}

function convertEventToPropsAndDispatch(dispatch){
  return bindActionCreators({
    deleteClicked:deleteProduct,
    sendAllProducts:allProductsBroadcast
  },dispatch);
}


export default withRouter(connect(convertStoreToPropsForProductsContainer,convertEventToPropsAndDispatch)(Products));