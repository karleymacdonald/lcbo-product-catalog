import { all, fork } from 'redux-saga/effects';
import ProductListSagas  from '../modules/productList/sagas';

export default function* rootSaga() {
  yield all(
    [...ProductListSagas.map((saga) => fork(saga))]
  );
};