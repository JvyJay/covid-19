import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Row } from 'reactstrap';

import CartItem from './CartItem';

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cart, removeItem } = useContext(CartContext);

  const total = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  const visibleToggle = () => {
    setToggle(true);
  };

  return (
    <>
      {cart.length === 0 && (
        <h1 className='p-4 text-center'>No items in cart</h1>
      )}
      {cart.length >= 1 && <h1 className='p-4 text-center'>Your Cart</h1>}
      <Container>
        <Row>
          <div className='flex-column justify-content-center align-items-center'>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} removeItem={removeItem} />
            ))}
          </div>
        </Row>
      </Container>
      {cart.length >= 1 && (
        <div className='text-center'>
          <Button onClick={visibleToggle}>Get Total</Button>
          <p className={(`mt-2`, !toggle ? 'notVisible' : 'visible')}>
            Total: ${total()}
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
