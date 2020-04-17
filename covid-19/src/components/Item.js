import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from 'reactstrap';

import ItemButtons from './ItemButtons';

const Item = (props) => {
  return (
    <Col>
      <Card key={props.key} className='m-5'>
        <CardImg src={props.img} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <ItemButtons />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Item;
