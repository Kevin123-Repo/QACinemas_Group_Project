import React, { useState } from 'react';
import Logo from '../../Images/QA-logo-2019.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

const FooterBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="footer-div">
            <div class="b-example-divider"></div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse id="footer-links" isOpen={isOpen} navbar>
                    <Nav className="mr-auto ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link exact to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/About">About</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/ContactPage">Contact Us</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default FooterBar;