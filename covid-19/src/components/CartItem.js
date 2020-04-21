import React from 'react';

import { Col, Media } from 'reactstrap';

const CartItem = (props) => {
  return (
    <Col className='mt-4'>
      <Media>
        <Media left href='#'>
          <img className='w-resize' src={props.img} alt='Item' />
        </Media>
        <Media className='ml-2' body>
          <Media heading>{props.title}</Media>
          <Media>
            {`$`}
            {props.price}
          </Media>
        </Media>
      </Media>
    </Col>
  );
};

export default CartItem;
