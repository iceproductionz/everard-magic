import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";

const rowStyling = {
    backgroundImage: 'url(./images/Bitmap 16.png);',
    backgroundSize: 'contain;',
}
const headerStyling = {
    textAlign: 'center',
    color: 'white',
}

export default function Subscribe() {
    return (
        <div style={rowStyling} >
            <Row>
                <Col xs={8} />
                <Col xs={4} style={{backgroundColor: 'black'}}>
                    <br />
                    <h2 style={headerStyling}>
                        Join our email scheme for regular updates
                    </h2>
                    <Form>
                        <Form.Group controlId="formCompanyName">
                            <Form.Control type="email" placeholder="Company name" />
                        </Form.Group>
                        <Form.Group controlId="formFullName">
                            <Form.Control type="email" placeholder="Full name" />
                        </Form.Group>
                        <Form.Group controlId="formEmailAddress">
                            <Form.Control type="email" placeholder="Email address" />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Subscribe
                        </Button>
                    </Form>
                    <br />
                    <br />
                </Col>
            </Row>
        </div>
    )
}