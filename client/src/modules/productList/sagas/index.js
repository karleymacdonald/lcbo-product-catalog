import axios from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { 
  FETCH_PRODUCTS, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_ERROR 
} from '../constants';
import { getNextPage } from '../../../store/selectors';

function* fetchProductsExecutor(){
  const page = yield select(getNextPage)
  try {
    const request = yield call(axios.get, "/api/items", { params: { page } })
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