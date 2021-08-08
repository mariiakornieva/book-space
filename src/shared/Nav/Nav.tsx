import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export const Nav: React.FC = ({ children }) => {
  return (
    <nav className="container flex md:flex-row md:justify-between items-center px-2">
      <NavLink exact to="/" className="block w-18 h-18">
        <img src={logo} alt="Book Space Logo" />
      </NavLink>

      <ul className="flex space-x-2">
        {children}
      </ul>
    </nav>
  );
};
