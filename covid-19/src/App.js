import React from 'react';
import './App.css';
import { ItemContext } from './context/DataProvider';

import NavComponent from './components/Navbar';

const data = [
  { title: 'Hand Sanitizer', img: '', price: '$20' },

  { title: 'Surgical Mask (20 Pack)', img: '', price: '$100' },

  { title: 'Toilet Paper (20 Rolls)', img: '', price: '$1,000' },
];

const App = () => {
  return (
    <ItemContext.Provider value={data}>
      <div className='App'>
        <NavComponent />
      </div>
    </ItemContext.Provider>
  );
};

export default App;
