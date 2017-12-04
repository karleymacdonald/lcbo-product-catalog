import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { 
  FETCH_PRODUCTS, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_ERROR 
} from '../constants';

function* fetchProductsExecutor(){
  try {
    const request = yield call(axios.get, "/api/items")
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: request.data })
  } catch (err) {
    yield put({ type: FETCH_PRODUCTS_ERROR })
  }
}

function* fetchProductsWatcher() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsExecutor);
}

const ProductListSagas = [
  fetchProductsWatcher
];

export default ProductListSagas;