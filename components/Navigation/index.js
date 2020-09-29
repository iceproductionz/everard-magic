import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";


export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Brands</Nav.Link>
                    <Nav.Link href="#home">Tyre equipment</Nav.Link>
                    <Nav.Link href="#home">Wheel alignment</Nav.Link>
                    <Nav.Link href="#home">Specialist equipment</Nav.Link>
                    <Nav.Link href="#home">List equipment</Nav.Link>
                    <Nav.Link href="#home">MOT</Nav.Link>
                    <Nav.Link href="#home">Dispensing services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}