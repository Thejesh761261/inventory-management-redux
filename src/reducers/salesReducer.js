const salesReducer=(state=null,action)=>{

    var sales =  []
    switch (action.type) {
      case "ADD_SALES":
        sales = action.payload;
        console.log(sales)
        return sales;

      case "ADD_ALL_PRODUCTS":
        console.log(state);
        return state;
        
       
     default:
       break;
   }
    return sales;
}

export default salesReducer;