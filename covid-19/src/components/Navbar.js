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

const imgResize = {
  width: '25px',
};

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='bg-warning' light expand='lg'>
        <NavbarBrand href='/'>
          <img src={logo} style={imgResize} alt='logo' /> Quarantine Shop
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink>Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
