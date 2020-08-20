import allProducts from './productsReducer';
import { combineReducers } from 'redux';
import sales from './salesReducer';
import login from './loginReducer';

const allReducers = combineReducers({
    products:allProducts,
    sales:sales,
    login:login

})

export default allReducers;