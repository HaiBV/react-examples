import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header id='masthead' class='site-header'>
    <nav id='site-navigation' class='main-navigation'>
      <div class='menu-menu-1-container'>
        <ul id='menu-menu-1' class='menu'>
          <li>
            <a href='index.html'>Home</a>
          </li>
          <li>
            <a href='about.html'>About</a>
          </li>
          <li>
            <a href='shop.html'>Shop</a>
          </li>
          <li>
            <a href='blog.html'>Blog</a>
          </li>
          <li>
            <a href='elements.html'>Elements</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {};

export default Header;
