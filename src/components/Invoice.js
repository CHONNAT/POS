import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { QRCodePay, logo } from '../assets/images';
import TotalField from './TotalField';

function Invoice(props) {

  return (
    <div ref={props.componentref}>
        <div className="print-only">
          <div><img src={logo} alt={logo} /></div>
          <div>
            <Row style={{borderBottom: '1px solid'}}>
              <Col sm={6}>Items</Col>
              <Col sm={3}>Qty</Col>
              <Col sm={3}>Price</Col>
            </Row>
            {
              props.invdata.map((data, id) => {
                const { itemName, qty, ttInUnPrice } = data;
                return (
                  <Row key={id} style={{margin: '5px 0'}}>
                    <Col sm={8}>{id+1} {itemName}</Col>
                    <Col sm={2}>{qty}</Col>
                    <Col sm={2}>{ttInUnPrice}</Col>
                  </Row>
                )
              })
            }
          </div>
          <TotalField
            ttprice={props.ttprice}
          />
          <div>
            <p>Pay here</p>
            <img src={QRCodePay} alt={QRCodePay} />
            <p style={{marginTop: '20px'}}>Thank you! see you again.</p>
            <p style={{marginTop: '20px'}}>.</p>
          </div>
        </div>
      </div>
  )
}

export default Invoice;