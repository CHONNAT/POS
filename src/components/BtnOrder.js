import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import '../assets/Style/Header.css';
import Invoice from './Invoice';
import TotalField from './TotalField';

function BtnOrder(props) {
  const componentRef = useRef();
  const [printed, setPrinted] = useState(false);

  const handlePrint = () => {
    // setPrinted(true);
  };

  const handleAfterPrint = () => {
    if (printed === false) {
      window.location.reload();
      // console.log('printed');
      // props.cslist()
      setPrinted(true);
    }
  };

  return (
    <div>
      <TotalField
        ttprice={props.ttprice}
      />

      <ReactToPrint
        trigger={() => <Button>Order</Button>}
        content={() => componentRef.current}
        documentTitle='new document'
        onBeforePrint={handlePrint}
        onAfterPrint={handleAfterPrint}
      />

      <Invoice
        componentref = {componentRef}
        invdata = {props.invdata}
        ttprice = {props.ttprice}
      />

    </div>
  );
}

export default BtnOrder;
