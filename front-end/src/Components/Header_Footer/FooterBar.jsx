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
        <div>
            <Navbar color="light" light expand="md" fixed="bottom">
                <NavbarBrand href="/">QA Cinema</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/About">About</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/ContactPage">About</Link></NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><img src={Logo} width="35" height="30" alt="" /></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default FooterBar;