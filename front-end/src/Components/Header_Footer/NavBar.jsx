import React, { useState } from 'react';
import Logo from '../../Images/QA-logo-2019_blue.png'
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
import Searchbar from '../Searchbar/Searchbar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/"><img id="navbarLogo" src={Logo} alt="" /></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link exact to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/Listings">Listings</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/TicketBooking">Bookings</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Classifications">Classifications</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Screens">Screens</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/NewReleases">New Releases</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Discussion">Discussion</Link></NavLink>
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
          </Nav>
          <NavbarText></NavbarText>
          <Searchbar/>
        </Collapse>
      </Navbar >
      <div className="b-example-divider"></div>
    </div >
  );
}

export default NavBar;