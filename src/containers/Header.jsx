
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default Header {

  render() {
    return (
      <Header className="Header">
        <nav>
        <NavLink to='/prompts'>Promts</NavLink>
        <NavLink to='/prompts:id'>bleh</NavLink>
       </nav>
      </Header>
    );
  }

}
