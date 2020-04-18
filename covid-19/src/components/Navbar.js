import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

import Store from './Store';
import Cart from './Cart';

import logo from '../img/logo.png';
import cart from '../img/cart.svg';

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const imgResize = {
    width: '25px',
  };

  return (
    <Router>
      <Navbar className='bg-warning' light expand='lg'>
        <NavbarBrand href='/'>
          <img src={logo} style={imgResize} alt='logo' /> Quarantine Shop
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink>
                <Link className='text-dark' to='/'>
                  Store
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className='text-dark' to='/cart'>
                  Cart <img width={`15px`} src={cart} />
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
        <Route path='/cart' component={Cart} />
        <Route path='/' component={Store} />
      </Switch>
    </Router>
  );
};

export default NavComponent;
