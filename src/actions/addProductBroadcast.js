
const addProductBroadcast = function(product){

    console.log("In action Listener "+product);

    return ({
        type:'ADD_NEW_PRODUCT',
        payload:product
    })
}

export default addProductBroadcast;