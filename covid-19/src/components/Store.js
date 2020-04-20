import React, { useContext } from 'react';
import { ItemContext } from '../context/DataProvider';
import { Container, Row } from 'reactstrap';

import Item from './Item';

const Store = () => {
  const { items, addItem, outOfStock } = useContext(ItemContext);

  return (
    <>
      <h1 className='p-4 text-center'>Health {`&`} Wellness</h1>
      <Container>
        <Row>
          <div className=' d-lg-flex flex-row justify-content-center'>
            {items.map((item) => {
              return (
                <Item
                  id={item.id}
                  product={item}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  text={item.text}
                  addItem={addItem}
                  outOfStock={outOfStock}
                />
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Store;
