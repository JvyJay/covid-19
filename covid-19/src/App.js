import React from 'react';
import './App.css';
import { ItemContext } from './context/DataProvider';

import NavComponent from './components/Navbar';
import Store from './components/Store';
import Footer from './components/Footer';

import img1 from './img/handsanitizer.jpg';
import img2 from './img/masks.jpg';
import img3 from './img/toiletpaper.jpg';

const data = [
  {
    id: 1,
    title: 'Hand Sanitizer',
    img: img1,
    price: '$20',
    text:
      'Better to wash your hands with regular hand soap but this is a good second option',
  },
  {
    id: 2,
    title: 'Surgical Mask (20 Pack)',
    img: img2,
    price: '$100',
    text: `These won't even really protect you from the virus, but if you're already sick you can help prevent others from catching it!`,
  },
  {
    id: 3,
    title: 'Toilet Paper (20 Rolls)',
    img: img3,
    price: '$1,000',
    text: 'Better get them before the panic buyers do',
  },
];

const App = () => {
  return (
    <ItemContext.Provider value={data}>
      <div className='App'>
        <NavComponent />
        <Store />
        <Footer />
      </div>
    </ItemContext.Provider>
  );
};

export default App;
