import React from 'react';
import { Card } from 'react-bootstrap';
import { useModalPopUp } from '../containers/Hooks';
import { ModalPopUp } from './ModalPopUp';
const Cards = (props) => {
    const [modalShow, setModalShow] = useModalPopUp(false);
    const { Img, Title, Price } = props.ObjCard;
    const unitPrice = Price || 0;

    const holdDefault = () => {
        console.log('Empty data');
    };

    const popupclicked = props.popupclicked || holdDefault;

    return (
        <>
            <Card
                key={props.id}
                id={props.id}
                style={{ width: '18rem' }}
                onClick={() => {
                    setModalShow(true)
                }}
            >
                <Card.Img variant="top" src={Img} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>USD : {unitPrice.toFixed(2)}</Card.Text>
                </Card.Body>
            </Card>

            <ModalPopUp
                modalstyle = {props.modalstyle}
                show={modalShow}
                objcard = {props.ObjCard}
                onHide={() => setModalShow(false)}
                popupclicked = {popupclicked}
                holdfreeqty ={props.holdfreeqty}
                holdsetfreeqty = {props.holdsetfreeqty}
            />
        </>
    )
}

export default Cards;






