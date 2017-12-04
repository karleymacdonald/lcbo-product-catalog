import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import ProductListContainer from './containers/ProductListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <ProductListContainer />
      </div>
    );
  }
}

export default App;
