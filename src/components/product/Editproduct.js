import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import editProductBroadcast from '../../actions/editProductBroadcast';

class EditProduct extends React.Component {

    state = { 
        pname:'',
        nameError:false,
        pcode:'',
        codeError:false,
        category:'',
        categoryError:false,
        vendor:'',
        vendorError:false,
        price:0.0,
        priceError:false,
        quantity:0,
        quantityError:false,
        manufacturer:'',
        manufacutrerError:false,
        description:'',
        descriptionError:false,
        color:'',
        colorError:false,
        rating:0,
        ratingError:false,
        size:'',
        sizeError:false,
        material:'',
        materialError:false,
        idealFor:'',
        idealForError:false,
        isSuccess:false,
        categories:[]
     }
   
     validate(){
        if(this.state.pname===''){
           this.setState({nameError:true})
        }
        if(this.state.pcode===''){
           this.setState({codeError:true})
        }
        if(this.state.category===''){
            this.setState({categoryError:true})
        }
        if(this.state.vendor===''){
           this.setState({vendorError:true})
       }
       if(this.state.price===0.0){
           this.setState({priceError:true})
       }
       if(this.state.quantity===0){
           this.setState({quantityError:true})
       }
       if(this.state.manufacturer===''){
           this.setState({manufacturerError:true})
       }
       if(this.state.description===''){
           this.setState({descriptionError:true})
       }
       if(this.state.material===''){
           this.setState({materialError:true})
       }
       if(this.state.rating===0){
           this.setState({ratingError:true})
       }
       if(this.state.color===''){
           this.setState({colorError:true})
       }
       if(this.state.size===''){
           this.setState({sizeError:true})
       }
       if(this.state.idealFor===''){
           this.setState({idealForError:true})
       }else{
           return true;
       }
    }

    componentDidMount=()=>{
        
        
        console.log(this.props.location.state.product[0])
       //  if(this.props.location.state.product===undefined){
       //     return (<h1>404</h1>)
       // }
       this.setState({
           pname:this.props.location.state.product[0].name,
           id:this.props.location.state.product[0].id,
           pcode:this.props.location.state.product[0].code,
           category:this.props.location.state.product[0].category,
           vendor:this.props.location.state.product[0].vendor,
           price:this.props.location.state.product[0].unitPrice,
           quantity:this.props.location.state.product[0].quantity,
           manufacturer:this.props.location.state.product[0].manufacturer,
           description:this.props.location.state.product[0].description,
           color:this.props.location.state.product[0].color,
           size:this.props.location.state.product[0].size,
           material:this.props.location.state.product[0].material,
           idealFor:this.props.location.state.product[0].idealFor,
           rating:this.props.location.state.product[0].rating,

       },()=>console.log(this.state))         
       
    }
    

    nameChangeHandler=(e)=>{
        this.setState({pname : e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     codeChangeHandler=(e)=>{
        this.setState({pcode : e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     categoryChangeHandler=(e)=>{
        this.setState({category : e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     vendorChangeHandler=(e)=>{
        this.setState({vendor:e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     priceChangeHandler=(e)=>{
         console.log(e);
       this.setState({price:e.target.value});
       this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
    }

     quantityChangeHandler=(e)=>{
        this.setState({quantity:e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
      }

     manufacturerChangeHandler=(e)=>{
        this.setState({manufacturer:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     descChangeHandler=(e)=>{
        this.setState({description:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     colorChangeHandler=(e)=>{
        this.setState({color:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     sizeChangeHandler=(e)=>{
        this.setState({size:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     materialChangeHandler=(e)=>{
        this.setState({material:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     ratingChangeHandler=(e)=>{
        this.setState({rating:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }

     idealForChangeHandler=(e)=>{
        this.setState({idealFor:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false,materialError:false,colorError:false,sizeError:false,idealForError:false,ratingError:false})
     }


     editProduct=(e)=>{
        e.preventDefault();
        let res=this.validate();
        if(res===true){
            res=false;
           let data={
               "code":this.state.pcode,
               "name":this.state.pname,
               "category":this.state.category,
               "vendor":this.state.vendor,
               "unitPrice":parseFloat(this.state.price),
               "manufacturer":this.state.manufacturer,
               "description":this.state.description,
               "quantity":parseInt(this.state.quantity),
               "color":this.state.color,
               "size":this.state.size,
               "material":this.state.material,
               "idealFor":this.state.idealFor,
               "rating":parseFloat(this.state.rating),
               "reorder_value":100,
               "replenishment_value":50,
               "id":this.state.id
           }
           
           this.props.editProduct(data);
           this.setState({isSuccess:true});
           console.log(data);

        //  Axios.put('http://localhost:3000/products/'+this.state.id,data)
        //     .then(response=>{
        //         console.log(response);
        //         this.setState({isSuccess:true});
        //     },error=>{
        //         console.log(error);
        //     })
     }
    }



    render() { 
        if(sessionStorage.getItem("loggedInUser")===''){
            return <Redirect to={{ pathname : "/" }} />
        }
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Please navigate from products page!!!! </h1>
                </div>
            )
        }
        return (
    <div>
    <InventoryHeader></InventoryHeader>
    <SideNav></SideNav>
    <h3 className="he1">Edit Product</h3>
    <hr/>
    <div className="c2">
    <form  style={{bottom:'0px'}}>
    <label  htmlFor="pname"><b>Product Name</b></label>
        <input type="text" placeholder="Enter Productname" name="pname" required  value={this.state.pname} onChange={this.nameChangeHandler} />
        {this.state.nameError && (<h5 className="alert alert-danger">Enter valid product name</h5>)}
        <label htmlFor="pcode"><b>Product Code</b></label>
        <input type="text" placeholder="Enter ProductCode" name="pcode" required value={this.state.pcode} onChange={this.codeChangeHandler} />
        {this.state.codeError && (<h5 className="alert alert-danger">Enter valid product code</h5>)}
        <label htmlFor="category"><b>Category</b></label>
        <input type="text" placeholder="Enter Category" name="Category"  required value={this.state.category} onChange={this.categoryChangeHandler} />
        {this.state.categoryError && (<h5 className="alert alert-danger">Enter valid category</h5>)}
        <label><b>Vendor</b></label>
        <input type="text" placeholder="Enter Vendor name" name="vendor" required value={this.state.vendor} onChange={this.vendorChangeHandler} />
        {this.state.vendorError && (<h5 className="alert alert-danger">Enter valid vendor name</h5>)}
        <label><b>Unit Price</b></label>
        <input type="text" placeholder="Unit Price value" name="uprice" required value={this.state.price} onChange={this.priceChangeHandler} />
        {this.state.priceError && (<h5 className="alert alert-danger">Enter valid price</h5>)}
        <label><b>Quantity</b></label>
        <input type="text" placeholder="Initial Quantity" name="quantity" required value={this.state.quantity} onChange={this.quantityChangeHandler} />

        {this.state.quantityError && (<h5 className="alert alert-danger">Enter valid quantity</h5>)}

        <label ><b>Manufacturer</b></label>
        <input type="text" placeholder="Enter Manufacturer name" name="manufacturer" required value={this.state.manufacturer} onChange={this.manufacturerChangeHandler} />
        {this.state.manufacturerError && (<h5 className="alert alert-danger">Enter valid manufacturer name</h5>)}

        <label ><b>Description</b></label>
        <input type="text" placeholder="Enter Description" name="desc" required value={this.state.description} onChange={this.descChangeHandler} />
        {this.state.descriptionError && (<h5 className="alert alert-danger">Enter valid product description</h5>)}

        <label ><b>Color</b></label>
        <input type="text" placeholder="Enter Product Color" name="color" value={this.state.color} required onChange={this.colorChangeHandler} />
        {this.state.colorError && (<h5 className="alert alert-danger">Enter product color</h5>)}

        <label ><b>Size</b></label>
        <input type="text" placeholder="Enter Size" name="size" required value={this.state.size} onChange={this.sizeChangeHandler} />
        {this.state.descriptionError && (<h5 className="alert alert-danger">Enter product size</h5>)}

        <label ><b>IdealFor</b></label>
        <select name="Category" id="category" className="form-control" onChange={this.idealForChangeHandler}>
        <option defaultValue='' value={this.state.idealFor}>{this.state.idealFor}</option>
            <option defaultValue='Men' value="Men">Men</option>
            <option value="Women">Women</option>
           
        </select><br></br>
        {this.state.idealForError && (<h5 className="alert alert-danger">Enter whom this product is ideal for</h5>)}

        <label ><b>Material</b></label>
        <input type="text" placeholder="Material used" name="material" required value={this.state.material} onChange={this.materialChangeHandler} />
        {this.state.materialError && (<h5 className="alert alert-danger">Enter materialError used</h5>)}

        <label ><b>Initial Rating</b></label>
        <input type="number" placeholder="Enter initial rating" name="rating" value={this.state.rating} required onChange={this.ratingChangeHandler} />
        {this.state.ratingError && (<h5 className="alert alert-danger">Enter initial product rating</h5>)}
        
    <button type="submit" className="btn btn-success" onClick={this.editProduct}>Edit Product</button>
       {/* <Link to="/products"> <button  className="btn btn-info">Cancel</button></Link> */}
    </form>
    </div>
    <div style={{textAlign:"center"}}>
        { this.state.isSuccess && (<h3 className="alert-sucess" style={{backgroundColor:"green",color:"white"}}>Product edited successfully</h3>) }
    </div>
</div>
          );
    }
}

function convertPropsToEventAndBroadcast(dispatch){
    return bindActionCreators({
        editProduct:editProductBroadcast
    },dispatch);
}
 
export default connect(null,convertPropsToEventAndBroadcast)(EditProduct);