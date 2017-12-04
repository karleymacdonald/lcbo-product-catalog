import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.shape({})
  }

  static defaultProps = {
    products: []
  }

  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const { products, actions } = this.props;
    const hasProducts = products.length > 0;

    return (
      <div>
        <div>
        { hasProducts && 
          products.map((product) => <ProductCard key={product.id} product={product} />)
        }
        <button onClick={() => actions.getProducts()}> Load More </button>
        </div>
      </div>
    );
  }
}



export default ProductList;