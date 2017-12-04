import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = function(props) {
  const { product } = props;

  const getPriceInDollars = (priceInCents) => {
    return (<div>
      <span className="currency-sign">$</span>
      {(priceInCents/100).toFixed( 2 )}
    </div>);
  }

  const getInventory = (count) => {
    if (count > 0) {
      return (<div>
        <i className="material-icons">done</i>
        <span className="inventory">In Stock</span>
      </div>);
    }
    return (<div>
      <i className="material-icons">clear</i>
      <span className="inventory">Out of Stock</span>
    </div>);  }

  const getAlcoholContent = (val) => {
    return `${(val/100).toFixed( 1 )}% Alcohol`
  }

  const getDescription = (product) => {
    if (product.varietal) {
      return product.varietal
    } else if (product.tertiary_category) {
      return product.tertiary_category
    }
  }

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name}/>
      <div>{product.name}</div>
      <div>{getDescription(product)}</div>
      <div>{product.package}</div>
      <div>{getAlcoholContent(product.alcohol_content)}</div>
      {getPriceInDollars(product.price_in_cents)}
      {getInventory(product.inventory_count)}
      
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({}).isRequired
}

export default ProductCard;