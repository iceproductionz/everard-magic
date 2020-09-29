import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Filter() {
    return (
        <Row>
            <Col xs={6}>
                <Form>
                    <Form.Group controlId="formCompanyName">
                        <Form.Control as={"select"} placeholer={"Select category"}>
                            <option>Select category</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formFullName">
                        <Form.Control as={"select"} placeholer={"Select brand"}>
                            <option>Select brand</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formEmailAddress">
                        <Form.Control as={"select"} placeholer={"Select part"}>
                            <option>Select part</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Subscribe
                    </Button>
                </Form>

            </Col>
            <Col xs={6}>
                <img src={'/images/Bitmap 5.png'} width={'100%'} />
            </Col>
            <Col>
                <br />
            </Col>
        </Row>
    )
}