import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

import logo from '../img/logo.png';
import cart from '../img/cart.svg';

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const imgResize = {
    width: '25px',
  };

  return (
    <>
      <Navbar className='bg-warning' light expand='lg'>
        <NavbarBrand href='/'>
          <img src={logo} style={imgResize} alt='logo' /> Quarantine Shop
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink className='text-dark font-weight-normal'>Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-dark font-weight-normal'>
                Cart <img width={`15px`} src={cart} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavComponent;
