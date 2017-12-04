import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard'

const ProductList = function(props) {
  const { products, actions } = props;
  const hasProducts = products.length > 0;
  return (
    <div>
      <button onClick={() => actions.getProducts()}> Get Products </button>
      <div>
      { hasProducts && 
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({})
}

ProductList.defaultProps = {
  products: []
}

export default ProductList;