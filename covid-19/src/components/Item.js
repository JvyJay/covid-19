import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
} from 'reactstrap';

const Item = (props) => {
  return (
    <Col>
      <Card key={props.key} className='m-5'>
        <CardImg src={props.img} />
        <CardBody>
          <CardTitle className='font-weight-bold'>{props.title}</CardTitle>
          <CardSubtitle>
            {`$`}
            {props.price}
          </CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button
            outline
            color='success'
            onClick={() => props.addItem(props.product)}
          >
            Buy
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Item;
