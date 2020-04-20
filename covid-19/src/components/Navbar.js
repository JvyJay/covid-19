import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

import logo from '../img/logo.png';
import cart from '../img/cart.svg';

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const imgResize = {
    width: '25px',
  };

  return (
    <Navbar className='bg-warning' light expand='lg'>
      <NavbarBrand href='/'>
        <img src={logo} style={imgResize} alt='logo' /> Quarantine Shop
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem className='mr-3'>
            <NavLink className='text-dark' to='/'>
              Store
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' to='/cart'>
              Cart <img width={`15px`} src={cart} alt={`Cart`} />{' '}
              {/* <span>{cart.length}</span> */}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavComponent;
