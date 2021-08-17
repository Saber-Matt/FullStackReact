
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Please Select your Writing Prompt</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/add'}>Add a Prompt, if you wish</Link>
    </header>

  );
};

export default Header;
