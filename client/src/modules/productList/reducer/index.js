import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../constants';
import { fetchProductsSuccessHandler, fetchProductsErrorHandler } from '../actionHandlers';

const initialState = {
  products: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccessHandler(state, action)
    case FETCH_PRODUCTS_ERROR:
      return fetchProductsErrorHandler(state, action)
    default:
      return state;
  }
}