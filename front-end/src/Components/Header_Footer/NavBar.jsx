import React, { useState } from 'react';
import Logo from '../../Images/QA-logo-2019.png'
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
import { NavLink as Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">QA Cinema</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/TicketBooking">Bookings</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Classifications">Classifications</Link></NavLink>
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
                <DropdownItem >
                  <Link to="/About">About</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/OpeningTimes">Opening Times</Link>
                </DropdownItem>
                <DropdownItem href="">
                <Link to="/ContactPage">Contact Us</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="">
                  <Link to="/GettingThere">Getting There</Link>
                </DropdownItem>
                <DropdownItem href="">
                  <Link to="/PlacesToGo">Places To Visit</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="">Discussion</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><img src={Logo} width="35" height="30" alt="" /></NavbarText>
        </Collapse>
      </Navbar >
    </div >
  );
}

export default NavBar;