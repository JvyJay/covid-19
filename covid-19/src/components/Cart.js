import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';
import swal from 'sweetalert';

import CartItem from './CartItem';

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cart, clearCart } = useContext(CartContext);

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
        <Row className='shadow p-3 mb-5 bg-white rounded'>
          <div className='flex-column justify-content-center align-items-center mb-4'>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </Row>

        {cart.length >= 1 && (
          <div className='cart-box mt-4'>
            <div className='total'>
              <Button className='mr-2' onClick={visibleToggle}>
                Get Total
              </Button>
              <p className={!toggle ? 'notVisible' : 'visible'}>${total()}</p>
            </div>
            <div className='button-group'>
              <ButtonGroup>
                <Button color='danger' onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button
                  color='success'
                  onClick={() =>
                    swal(
                      'Successful Transaction',
                      'You are now ready for the apocalypse :)',
                      'success'
                    )
                  }
                >
                  Checkout
                </Button>
              </ButtonGroup>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
