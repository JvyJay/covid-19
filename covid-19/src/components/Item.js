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
    <div>
      <Card>
        <CardImg />
        <CardBody>
          <CardTitle>Item</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt pharetra odio, nec molestie tortor placerat vel. Quisque
            vitae diam tortor. Praesent rhoncus feugiat libero in condimentum.
            Vestibulum sed consequat arcu, eu volutpat eros. Pellentesque
            feugiat nisi vitae ligula sodales fermentum.
          </CardText>
          <Button>Add To Card</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
