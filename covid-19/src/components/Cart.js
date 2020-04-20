import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Row } from 'reactstrap';

import CartItem from './CartItem';

const Cart = () => {
  const cart = useContext(CartContext);
  const total = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <Container>
      <Row>
        <div className=' d-xl-flex flex-row justify-content-center'>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div>
          <Button>Get Total</Button>
          <p>Total: ${total()}</p>
        </div>
      </Row>
    </Container>
  );
};

export default Cart;
