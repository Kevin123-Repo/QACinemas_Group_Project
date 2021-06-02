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

const Footer_Bar = (props) => {
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
                    <NavbarText>LOGO?</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Footer_Bar;