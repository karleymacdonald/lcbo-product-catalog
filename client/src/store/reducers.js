import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import ProductListReducer from '../modules/productList/reducer';

export default combineReducers({
  productList: ProductListReducer,
  routing: routerReducer
})