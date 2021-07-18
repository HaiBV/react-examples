import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header id='masthead' class='site-header'>
    <nav id='site-navigation' class='main-navigation'>
      <ul id='menu-menu-1' class='menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
