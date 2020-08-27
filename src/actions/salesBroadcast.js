import productsData from '../data/inventory.json';

const salesBroadcast = function(){

    const sales = productsData.sales;
    console.log(sales)

    console.log("In action Listener "+sales);

    return ({
        type:'ADD_SALES',
        payload:sales
    })
}



export default salesBroadcast;