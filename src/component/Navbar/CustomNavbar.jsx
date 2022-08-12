
import { useState } from 'react';
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
    NavbarText,
} from 'reactstrap';
import{NavLink as ReactLink} from "react-router-dom";

const CustomNavbar = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                color="dark"
                dark
                expank="md"
                fixed=""
            >
                <NavbarBrand tag={ReactLink} to="/">MyProperty</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="https://github.com/reactstrap/reactstrap">
                                Properties
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Login/SignUp
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={ReactLink} to="/customerSignUp">Customer</DropdownItem>
                                <DropdownItem tag={ReactLink} to="/owner-signUp">Owner</DropdownItem>
                                <DropdownItem>Admin</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>

            </Navbar>

        </div>
    )
}
export default CustomNavbar;