import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Nav_Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">QA Cinema</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Bookings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Classifications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Screens</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">New Releases</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Get in Touch
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="">
                  About
                </DropdownItem>
                <DropdownItem href="">
                  Opening Times
                </DropdownItem>
                <DropdownItem href="">
                  Contact Us
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="">
                  Getting Here
                </DropdownItem>
                <DropdownItem href="">
                  Places To Visit
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="">Discussion</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>LOGO?</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nav_Bar;