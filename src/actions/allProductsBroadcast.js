const allProductsBroadcast = function(products){

    console.log("In action Listener "+products);

    return ({
        type:'ADD_ALL_PRODUCTS',
        payload:products
    })
}

export default allProductsBroadcast;