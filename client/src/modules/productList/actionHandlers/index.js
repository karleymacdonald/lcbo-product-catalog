import update from 'immutability-helper';

export function fetchProductsSuccessHandler(state, action) {
  const { payload } = action;
  return update(state, {
    products: { $merge: payload.result}
  });
}

export function fetchProductsErrorHandler(state, action) {
  return state;
}