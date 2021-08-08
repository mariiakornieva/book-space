import React from 'react';

export const Header: React.FC = ({ children }) => {
  return (
    <header className="flex md:flex-row items-center md:justify-center shadow-md">
      {children}
    </header>
  );
}
