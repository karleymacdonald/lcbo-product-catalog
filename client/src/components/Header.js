import React from 'react';
import Filter from './Filter';

const Header = function(props) {
  return (
    <div>
      <Filter />
      <div className="header-title"> Drynk </div>
    </div>
  );
}

export default Header;