import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import Login from '../login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addProductBroadcast from '../../actions/addProductBroadcast';

class AddProduct extends React.Component {
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
        // Axios.get('http://localhost:3000/products')
        //     .then(response=>{
        //         console.log(response);
        //       response.data.map(p=>{
        //           this.state.categories.push(p.category)
        //       })
        //      let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
        //      this.setState({categories:arr});
        //       console.log(arr);  

        //     },error=>{
        //         console.log(error);
        //     })

        this.props.products.map(p=>{
           this.state.categories.push(p.category)
        })
        let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
        this.setState({categories:arr});
        console.log(arr);  
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

     addProduct=(e)=>{
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
                "id":this.props.products[this.props.products.length-1].id+1
            }
            
            this.props.addNewProduct(data);
            this.setState({isSuccess:true});
            console.log(data);
   
            // Axios.post('http://localhost:3000/products',data)
            //    .then(response=>{
            //        console.log(response);
            //        this.setState({isSuccess:true});
   
            //    },error=>{
            //        console.log(error);
            //    })
         }
         
     }



    render() { 
        if(sessionStorage.getItem("loggedInUser")===''){
            return <Login />
        }
        return (
    <div>
    <InventoryHeader></InventoryHeader>
    <SideNav></SideNav>
    <h3 className="he1">Add Product</h3>
    <hr/>
    <div className="c2">

        <form  style={{bottom:'0px'}}>
        <label  htmlFor="pname"><b>Product Name</b></label>
        <input type="text" placeholder="Enter Productname" name="pname" required  onChange={this.nameChangeHandler} />
        {this.state.nameError && (<h5 className="alert alert-danger">Enter valid product name</h5>)}
        <label htmlFor="pcode"><b>Product Code</b></label>
        <input type="text" placeholder="Enter ProductCode" name="pcode" required onChange={this.codeChangeHandler} />
        {this.state.codeError && (<h5 className="alert alert-danger">Enter valid product code</h5>)}
        <label htmlFor="category"><b>Category</b></label>
        <select name="Category" id="category" className="form-control" onChange={this.categoryChangeHandler}>
        <option defaultValue='' value="">Choose Option</option>
        {this.state.categories.map((s, i) => (
            <option key={i} defaultValue='Formals' value={s}>
            {s}
            </option>
            ))}
        </select><br></br>
        {this.state.categoryError && (<h5 className="alert alert-danger">Enter valid category</h5>)}
        {/* <input type="select" placeholder="Category" name="category" required onChange={this.categoryChangeHandler} /> */}
        <label><b>Vendor</b></label>
        <input type="text" placeholder="Enter Vendor name" name="vendor" required onChange={this.vendorChangeHandler} />
        {this.state.vendorError && (<h5 className="alert alert-danger">Enter valid vendor name</h5>)}
        <label><b>Unit Price</b></label>
        <input type="text" placeholder="Unit Price value" name="uprice" required onChange={this.priceChangeHandler} />
        {this.state.priceError && (<h5 className="alert alert-danger">Enter valid price</h5>)}
        <label><b>Quantity</b></label>
        <input type="text" placeholder="Initial Quantity" name="quantity" required onChange={this.quantityChangeHandler} />

        {this.state.quantityError && (<h5 className="alert alert-danger">Enter valid quantity</h5>)}

        <label ><b>Manufacturer</b></label>
        <input type="text" placeholder="Enter Manufacturer name" name="manufacturer" required onChange={this.manufacturerChangeHandler} />
        {this.state.manufacturerError && (<h5 className="alert alert-danger">Enter valid manufacturer name</h5>)}

        <label ><b>Description</b></label>
        <input type="text" placeholder="Enter Description" name="desc" required onChange={this.descChangeHandler} />
        {this.state.descriptionError && (<h5 className="alert alert-danger">Enter valid product description</h5>)}

        <label ><b>Color</b></label>
        <input type="text" placeholder="Enter Product Color" name="color" required onChange={this.colorChangeHandler} />
        {this.state.colorError && (<h5 className="alert alert-danger">Enter product color</h5>)}

        <label ><b>Size</b></label>
        <input type="text" placeholder="Enter Size" name="size" required onChange={this.sizeChangeHandler} />
        {this.state.descriptionError && (<h5 className="alert alert-danger">Enter product size</h5>)}

        <label ><b>IdealFor</b></label>
        <select name="Category" id="category" className="form-control" onChange={this.idealForChangeHandler}>
            <option defaultValue='' value="">Choose Option</option>
            <option defaultValue='Men' value="Men">Men</option>
            <option value="Women">Women</option>
           
        </select><br></br>
        {this.state.idealForError && (<h5 className="alert alert-danger">Enter whom this product is ideal for</h5>)}

        <label ><b>Material</b></label>
        <input type="text" placeholder="Material used" name="material" required onChange={this.materialChangeHandler} />
        {this.state.materialError && (<h5 className="alert alert-danger">Enter materialError used</h5>)}

        <label ><b>Initial Rating</b></label>
        <input type="number" placeholder="Enter initial rating" name="rating" required onChange={this.ratingChangeHandler} />
        {this.state.ratingError && (<h5 className="alert alert-danger">Enter initial product rating</h5>)}
            
        <button type="submit" className="l1" onClick={this.addProduct.bind(this)}>Add Product</button>
        </form>
    </div>
    <div style={{textAlign:"center"}}>
             { this.state.isSuccess && (<h3 className="alert-sucess" style={{backgroundColor:"green",color:"white"}}>Product added successfully</h3>) }
         </div>
</div>
          );
    }
}

function convertPropsToStateForAddProduct(store){
    console.log(store.products)
    return {
        products:store.products
    }
}

function convertPropsToEventAndBroadcast(dispatch){
    return bindActionCreators({
        addNewProduct:addProductBroadcast
    },dispatch);
}


 
export default connect(convertPropsToStateForAddProduct,convertPropsToEventAndBroadcast)(AddProduct);