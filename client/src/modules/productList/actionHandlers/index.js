import update from 'immutability-helper';

export function fetchProductsSuccessHandler(state, action) {
  const { payload } = action;
  return update(state, {
    products: { $push: payload.result },
    page: { $set: payload.pager.current_page }
  });
}

export function fetchProductsErrorHandler(state, action) {
  return state;
}