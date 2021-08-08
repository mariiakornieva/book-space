import React from 'react';

export const Container: React.FC = ({ children }) => {
  return <main className="md:container md:mx-auto px-4">{children}</main>;
}
