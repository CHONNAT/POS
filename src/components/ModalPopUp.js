import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Qty from './Qty';

function ModalPopUp(props) {
 
    const { Img, Title, Price } = props.objcard;
    const [TmpPrice, setTmpPrice] = useState(Price);

    const holdfun = props.popupclicked;
    const handleClick = () => {
        const newHoldObj = {
            Img: Img,
            Title: Title,
            Price: Price,
            TmpQty: props.holdfreeqty
        };
        holdfun(newHoldObj);
        props.onHide();
        props.holdsetfreeqty(1);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className={props.modalstyle}>
                <Row>
                    <Col sm={5}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Img} />
                        </Card>
                    </Col>
                    <Col sm={7} className='rightCol'>
                        <h4>{Title}</h4>
                        <div>
                            <h5>USD : {TmpPrice.toFixed(2)}</h5>
                            <Qty
                                holdfreeqty ={props.holdfreeqty}
                                holdsetfreeqty = {props.holdsetfreeqty}
                                tmpprice={setTmpPrice}
                                unitprice={Price}
                            />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
                <Button onClick={handleClick}>Order</Button>
            </Modal.Footer>
        </Modal>
    );
}

export { ModalPopUp };

