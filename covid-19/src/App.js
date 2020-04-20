import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { CartContext } from './context/CartContext';
import { ItemContext } from './context/DataProvider';
import data from './data';

import NavComponent from './components/Navbar';
import Store from './components/Store';
import Cart from './components/Cart';
import Footer from './components/Footer';
import swal from 'sweetalert';

const App = () => {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const outOfStock = () => {
    swal(
      'Out of Stock',
      'Looks like the panic buyers beat you to it :(',
      'error'
    );
  };

  return (
    <ItemContext.Provider value={{ items, addItem, outOfStock }}>
      <CartContext.Provider value={cart}>
        <div className='App'>
          <NavComponent cart={cart} />
          <Route exact path='/' component={Store} />
          <Route path='/cart' render={() => <Cart cart={cart} />} />
          <Footer />
        </div>
      </CartContext.Provider>
    </ItemContext.Provider>
  );
};

export default App;
