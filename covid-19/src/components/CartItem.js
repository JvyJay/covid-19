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
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>
            {`$`}
            {props.price}
          </CardSubtitle>
          <Button>Remove from cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CartItem;
