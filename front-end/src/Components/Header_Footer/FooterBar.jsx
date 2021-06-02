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
    NavbarText
} from 'reactstrap';

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
                            <NavLink href="">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><img src={Logo} width="35" height="30" /></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default FooterBar;