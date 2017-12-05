import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer';
import ProductListContainer from './containers/ProductListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" component={HeaderContainer} />
          <Route exact path="/products" component={ProductListContainer} />
          <Route path="/" component={ProductListContainer} />
        </main>
      </div>
    );
  }
}

export default App;
