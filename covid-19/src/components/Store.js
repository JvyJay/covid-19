import React, { useContext } from 'react';
import { ItemContext } from '../context/DataProvider';

import Item from './Item';

const Store = () => {
  const items = useContext(ItemContext);
  return (
    <>
      <h1 className='p-4 text-center'>Health & Wellness</h1>
      <div className='d-flex flex-row justify-content-center'>
        {items.map((item) => {
          return (
            <Item
              img={item.img}
              title={item.title}
              price={item.price}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default Store;
