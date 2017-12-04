import { FETCH_PRODUCTS } from '../constants';

export function getProducts() {
  return {
    type: FETCH_PRODUCTS
  }
}