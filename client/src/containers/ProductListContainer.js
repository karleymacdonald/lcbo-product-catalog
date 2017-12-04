import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../modules/productList/actionCreators';
import ProductList from '../components/ProductList';

const mapStateToProps = (state) => ({
  products: state.ProductList.products
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);