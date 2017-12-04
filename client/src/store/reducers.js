import { combineReducers } from 'redux';
import ProductListReducer from '../modules/productList/reducer';

export default combineReducers({
  productList: ProductListReducer
})