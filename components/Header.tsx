
import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-green-700 text-white p-5 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
    </header>
  );
};
