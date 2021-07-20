import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header id='masthead' className='site-header'>
    <nav id='site-navigation' className='main-navigation'>
      <ul id='menu-menu-1' className='menu'>
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
