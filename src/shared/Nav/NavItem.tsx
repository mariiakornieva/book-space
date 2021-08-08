import React, { PropsWithChildren } from "react";
import { NavLink } from 'react-router-dom';

type NavItemProps = PropsWithChildren<{
  path: string;
  label: string;
}>;

export const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
  return (
    <li>
      <NavLink to={path} className="block px-4 py-2 rounded-md hover:text-green-700" activeClassName="bg-green-100 text-green-800">{label}</NavLink>
    </li>
  );
};
