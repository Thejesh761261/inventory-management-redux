const editProductBroadcast = function(product){

    console.log("In action Listener "+product);

    return ({
        type:'EDIT_PRODUCT',
        payload:product
    })
}

export default editProductBroadcast;