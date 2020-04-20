import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Row } from 'reactstrap';

import CartItem from './CartItem';

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useContext(CartContext);

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
          <div className=' d-lg-flex flex-row justify-content-center'>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </Row>
      </Container>
      <div className='text-center'>
        <Button onClick={visibleToggle}>Get Total</Button>
        <p className={!toggle ? 'notVisible' : 'visible'}>Total: ${total()}</p>
      </div>
    </>
  );
};

export default Cart;
