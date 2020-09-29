import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import React from "react";

export default function Header() {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">
                <img
                    src="./images/Bitmap.png"
                />
            </Navbar.Brand>
        </Navbar>
    )
}