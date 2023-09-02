import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/Style/Header.css';

function TotalField(props) {
  const tt = props.ttprice !== undefined ? props.ttprice : 0;
  return (
    <Container fluid={true} className='totalField'>
        <Row>
            <Col>Discount</Col>
            <Col>USD 0.00</Col>
        </Row>
        <Row>
            <Col><h6>Total</h6></Col>
            <Col><h6>USD {tt.toFixed(2)}</h6></Col>
        </Row>
    </Container>
  )
}

export default TotalField