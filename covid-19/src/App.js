import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { CartContext } from './context/CartContext';
import { ItemContext } from './context/DataProvider';

import NavComponent from './components/Navbar';
import Store from './components/Store';
import Cart from './components/Cart';
import Footer from './components/Footer';

import img1 from './img/handsanitizer.jpg';
import img2 from './img/masks.jpg';
import img3 from './img/toiletpaper.jpg';

const data = [
  {
    id: 1,
    title: 'Hand Sanitizer',
    img: img1,
    price: 20,
    text:
      'Better to wash your hands with regular hand soap but this is a good second option',
  },
  {
    id: 2,
    title: 'Surgical Mask (20 Pack)',
    img: img2,
    price: 100,
    text: `These won't even really protect you from the virus, but if you're already sick you can help prevent others from catching it!`,
  },
  {
    id: 3,
    title: 'Toilet Paper (20 Rolls)',
    img: img3,
    price: 1000,
    text: 'Better get them before the panic buyers do',
  },
];

const App = () => {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
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
