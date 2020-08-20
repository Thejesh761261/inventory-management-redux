const deleteProduct = function(id){

    console.log(id);
    return({
        type:"DELETE_CLICKED",
        payload:id
    })

}

export default deleteProduct;