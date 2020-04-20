import React from 'react';

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
} from 'reactstrap';

const CartItem = (props) => {
  return (
    <Col>
      <Card key={props.key} className='m-5'>
        <CardImg src={props.img} />
        <CardBody>
          <CardTitle className='font-weight-bold'>{props.title}</CardTitle>
          <CardSubtitle className='mb-2'>
            {`$`}
            {props.price}
          </CardSubtitle>
          <Button onClick={() => props.removeItem()}>Remove from cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CartItem;
