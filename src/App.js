import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import BtnOrder from './components/BtnOrder';
import Header from './components/Header';
import HeaderOrder from './components/HeaderOrder';
import ListOrders from './components/ListOrders';
import MainContent from './components/MainContent';
import { CardResoures } from './containers/CardResoures';
import { ConIconTabMenues, ConLogo } from './containers/ConImageResoures';
import { useTmpObjCards, useTmpQTY } from './containers/Hooks';
import { TotalPrice } from './containers/Implements';

function App() {
  const [holdobjcard, setHoldobjcard] = useTmpObjCards([]);
  const [freeQty, setFreeQty] = useTmpQTY();
  const [tmpttprice, setTmpTtPrice] = useState();
  const [invoiceData, setInvoiceData] = useState([]);
  // going on...
  // const [TmpQtyState, setTmpQtyState] = useState([]);
  // const [PriceUpdate, setPriceUpdate] = useState([]);

  const onlcliked = (tmp) => {
    setHoldobjcard(prevCards => [...prevCards, tmp]);
  }

  const handledelete = (id) => {
    setHoldobjcard((prevObj) => {
      return (
        prevObj.toSpliced(id, 1)
      );
    });
  };
  const ttFn = (price, invData) => {
    const tt = TotalPrice(price);
    setInvoiceData(invData);
    setTmpTtPrice(tt);
  }

  return (
    <Container fluid={true}>
      <Row className='my-row'>
        <Col sm={8}>
          <Header
            STYLEHEADER='myHeader'
            LOGO={ConLogo}
            STYLELOGO='styleLogo'
          />
          <MainContent
            StyleMainContent='mainContent'
            IconTapMenues={ConIconTabMenues}

            StyleTabBar='tabBar'

            CardResoures={CardResoures}
            StyleCard='conCards'
            popupclicked={onlcliked}
            holdfreeqty={freeQty}
            holdsetfreeqty={setFreeQty}
          />
        </Col>
        <Col
          sm={4}
          className='RightOutSide'
        >
          <HeaderOrder />
          <ListOrders
            StyleName='Lists'
            holdobjcard={holdobjcard}
            setobjcard={setHoldobjcard}

            // going on...
            // settmpqtystate = {setTmpQtyState}
            // tmpQtyState= {TmpQtyState}
            // setpriceupdate = {setPriceUpdate}
            // priceupdate= {PriceUpdate}

            handledelete={handledelete}
            holdttfn={(price, invData) => ttFn(price, invData)}
          />
          <BtnOrder
            invdata={invoiceData}
            ttprice={tmpttprice}
            // setttprice = {(data) => setTmpTtPrice(data)}
            clslist={setHoldobjcard}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
