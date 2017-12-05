import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

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
    const classMap = {
      0: "primary-card",
      1: "secondary-card",
      2: "secondary-card"
    };
    return (
      <div className="product-container">
        <div className="product-list">
        { hasProducts && 
          products.map((product, index) => {

            const className = classMap[index] ? classMap[index] : "standard-card";
            return (<ProductCard className={className} key={product.id} product={product}/>);
          })
        }
        </div>
        <button onClick={() => actions.getProducts()}> Load More </button>
      </div>
    );
  }
}



export default ProductList;