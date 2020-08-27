import React from 'react';
import '../../App.css';
import Chart from 'react-google-charts';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allProductsBroadcast from '../../actions/allProductsBroadcast';
import salesBroadcast from '../../actions/salesBroadcast';


class Dashboard extends React.Component{

    state={
        products:[],
        pieView:false,
        chart1:[
            ["category","quantity"]
        ],
        chart2:[
            ["Date","Formals","Kurtas","Jeans","Sarees","Shorts","T-Shirts"]
        ],
        categories:[],
        sales:[]
    }

    componentWillReceiveProps=(props)=>{
       this.setState({products:props.products})
       console.log(this.state.products);
       console.log(props.products)
    }

    componentWillMount=()=>{
        console.log("cdm");
        this.fetchProductDetails();
    }


    fetchProductDetails=()=>{
        // axios.get('http://localhost:3000/products')
        //     .then(response=>{
        //     this.setState({products:response.data});
        //     response.data.map(p=>{
        //         this.state.categories.push(p.category)
        //     })
        //    let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
        //    console.log(arr);
        // //    this.setState({categories:arr});
        // arr.map(c=>{
        //     console.log(c)
        //     let quantity=[];
        //     quantity=this.state.products.filter(p=>p.category===c)
        //     console.log(quantity);
        //     let temp=0;
        //     quantity.map(q=>{
        //          temp=q.quantity+temp;
        //     },0);

        //     this.state.chart1.push([c,parseInt(temp)]);
        // })
        // console.log(this.state.chart1)

        //     console.log(this.state.chart1);
        //     console.log(this.state.products);
        //     },error=>{
        //     console.log(error)
        // })
        if(this.props.products.length === 0){
            this.props.sendAllSales();
        }
        
          if(this.props.sales.length === 0){
            this.props.sendAllProducts();
          }
        this.setState({products:this.state.products});
        this.props.products.map(p=>{
            this.state.categories.push(p.category)
        })
        let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
         console.log(arr);
           this.setState({categories:arr});
        arr.map(c=>{
          console.log(c)
         let quantity=[];
         quantity=this.props.products.filter(p=>p.category===c)
          console.log(quantity);
          let temp=0;
          quantity.map(q=>{
                 temp=q.quantity+temp;
            },0);

            this.state.chart1.push([c,parseInt(temp)]);
        })
        console.log(this.state.chart1)

          console.log(this.state.chart1);
         console.log(this.state.products);

                // axios.get('http://localhost:3000/sales')
                //     .then(response=>{
                //         console.log(response.data);

                //         response.data.map(s=>this.state.chart2.push([s.date,s.Formals,s.Jeans,s.Kurtas,s.Sarees,s.Shorts,s.TShirts]));

                //         console.log(this.state.chart2);
                //     },error=>{
                //         console.log(error);
                //     })
                this.props.sales.map(s=>this.state.chart2.push([s.date,s.Formals,s.Jeans,s.Kurtas,s.Sarees,s.Shorts,s.TShirts]));

                console.log(this.state.chart2);

    }

    togglePie=()=>{
            this.setState({togglePie:!(this.state.pieView)})
    }

    render()
    {
        return(
             <div className="container dashboard">
            <h2 style={{zindex: '3',marginleft:'15%'}} className="he1">Inventory Dashboard</h2>
            <hr/>
            <h3>Current Month Sales Analysis</h3>
            <div className={"my-pretty-chart-container"}>
            <Chart
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={this.state.chart2}
          options={{
            // Material design options
            chart: {
              title: 'Sales of August ',
              subtitle: 'Daily sales in August month '
            },
          }}
          width="100%"
          height="400px"
          legendToggle
        />
         {/* <button className="btn btn-info" onClick={this.togglePie}>Change View</button> */}
         <h3>Current Inventory Volume</h3>
        {!this.state.pieView && (
            <Chart
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={this.state.chart1}
          options={{
            
            // Material design options
            chart: {
              title: 'Items in inventory ',
              subtitle: 'Inventory quantity based on categories'
            },
          }}
          width="100%"
          height="400px"
          legendToggle
        />
        )}
        
        {this.state.pieView && (

                <Chart
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={this.state.chart1}
                options={{
                is3D: true,
                title:'Quantity of items in inventory'
                }}
                width="100%"
                height="400px"
                rootProps={{ 'data-testid': '2' }}
                />

        )}
        
        
      </div>
            </div>
        );
    }

}

function convertStoreToPropsForSalesDetails(store){
    console.log(store);
    return { 
        products:store.products,
        sales:store.sales
    }

}

    function convertEventToPropsAndDispatch(dispatch){
        return bindActionCreators({
          sendAllProducts:allProductsBroadcast,
          sendAllSales:salesBroadcast
        },dispatch);
      }

export default connect(convertStoreToPropsForSalesDetails,convertEventToPropsAndDispatch)(Dashboard);