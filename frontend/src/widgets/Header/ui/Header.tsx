import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { User } from './User';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

export const Header = () => {
  const APP_NAME = 'ToDo';

  return (
    <header>
      <Navbar
        className="border-b"
      >
        <Navbar.Brand>
          <span className="text-xl font-semibold">{APP_NAME}</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to={'/'}>Home</Link>
          <Link to={'/user'}>User</Link>
          <Link to={'/list'}>List</Link>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <ThemeSwitcher />
          <User />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
