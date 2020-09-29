import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

export default function Equipment() {
    return (
        <Row>
            <Col xs={12}>
                <br />
                <h2 style={ {textAlign:'center', fontWeight: '700'}}>Find the equipment you need</h2>
            </Col>
            <Col xs={6}>
                Everard are the sole UK importer and distributor of the prestigious
                beissbarth range of work products we exclusively offer the full Beissbarth range of headlight
                testers and wheel alignment systems - including spare parts.
            </Col>
            <Col xs={6}>
                We are UK importers and distributor of the prestigious SICE
                range of tyre equipment. Everard Group Ltd. offers the very best
                in leverless and tradition tyre changers and wheel balancers -
                including fitting, servicing and spare parts.
            </Col>
        </Row>
    )
}