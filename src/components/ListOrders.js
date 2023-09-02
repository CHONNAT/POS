import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsTrash3 } from "react-icons/bs";
import Qty from './Qty';

function ListOrders(props) {
    const { holdttfn } = props;
    const tmparr = props.holdobjcard;

    const [TmpQtyState, setTmpQtyState] = useState([]);
    const [PriceUpdate, setPriceUpdate] = useState([]);
    
// going on ...
    // const setTmpQtyState = props.settmpqtystate;
    // const TmpQtyState = props.tmpQtyState;
    // const PriceUpdate = props.setpriceupdate;
    // const setPriceUpdate = props.priceupdate;

    const holdttfnRef = useRef();
    holdttfnRef.current = holdttfn;

    useEffect(() => {
        const updatedTmpInvData = tmparr.map((items, index) => {
            const { Title } = items;
            const qty = TmpQtyState[index] === undefined ? items.TmpQty : TmpQtyState[index];
            const ttInUnPrice = PriceUpdate[index] === undefined ? items.Price : PriceUpdate[index];
            
            return {
                itemName: Title,
                qty: qty,
                ttInUnPrice: ttInUnPrice
            };
        });
        
        holdttfnRef.current(PriceUpdate, updatedTmpInvData);
    }, [PriceUpdate, TmpQtyState, tmparr]);
    

    const handleTmpQtyChange = (index, newQty) => {
        const updatedTmpQtyState = [...TmpQtyState] || [];
        updatedTmpQtyState[index] = newQty;
        setTmpQtyState(updatedTmpQtyState);
    };

    const handlePriceUpdateChange = (index, newPrice) => {
        const updatedPriceUpdate = [...PriceUpdate] || [];
        updatedPriceUpdate[index] = newPrice;
        setPriceUpdate(updatedPriceUpdate);
    };

    const deleteClick = (id) => {
        props.handledelete(id);
        setTmpQtyState((prev) => prev.toSpliced(id, 1));
        setPriceUpdate((prev) => prev.toSpliced(id, 1));

    };
    return (
        <div>
            {
                tmparr.map((items, index) => {
                    const { Img, Title, Price, TmpQty } = items;
                    const tt = PriceUpdate[index] === undefined ? Price : PriceUpdate[index];
                    return (
                        <Row key={index} className={props.StyleName}>
                            <Col sm={3}>
                                <img src={Img} alt={Img} />
                            </Col>
                            <Col sm={5}>
                                <h5>
                                    {Title}
                                </h5>
                                <p>
                                    USD : {tt.toFixed(2)}
                                </p>
                            </Col>
                            <Col sm={4}>
                                <div onClick={() => deleteClick(index)}>
                                    <BsTrash3 />
                                </div>
                                <Qty
                                    key={`qty{index}`}
                                    holdsetfreeqty={newQty => handleTmpQtyChange(index, newQty)}
                                    holdfreeqty={TmpQtyState[index] === undefined ? TmpQty : TmpQtyState[index]}
                                    tmpprice={newPrice => handlePriceUpdateChange(index, newPrice)}
                                    unitprice={Price}
                                />
                            </Col>
                        </Row>
                    )
                })
            }
        </div>
    )
};

export default ListOrders;
