import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  ButtonGroup,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Item = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
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
          <CardText>{props.text}</CardText>
          <ButtonGroup>
            <Button
              onClick={() => props.addItem(props.product)}
              className='mr-2'
            >
              Add To Cart
            </Button>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Qty</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>4</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Item;
