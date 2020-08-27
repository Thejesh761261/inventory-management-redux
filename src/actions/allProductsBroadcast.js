import productsData from '../data/inventory.json';

const allProductsBroadcast = function(){

    const products = productsData.products;
    console.log(products)

    console.log("In action Listener "+products);

    return ({
        type:'ADD_ALL_PRODUCTS',
        payload:products
    })
}



export default allProductsBroadcast;