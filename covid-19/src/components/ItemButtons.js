import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const ItemButtons = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <ButtonGroup>
        <Button className='mr-2'>Add To Cart</Button>
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
    </>
  );
};

export default ItemButtons;
