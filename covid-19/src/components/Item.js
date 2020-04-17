import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Item = (props) => {
  return (
    <Card key={props.key} className='w-25 m-5'>
      <CardImg src={props.img} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.price}</CardSubtitle>
        <CardText>{props.text}</CardText>
        <Button>Add To Cart</Button>
      </CardBody>
    </Card>
  );
};

export default Item;
