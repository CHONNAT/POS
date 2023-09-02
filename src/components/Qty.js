import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { BsDashLg, BsPlusLg } from 'react-icons/bs';

function Qty(props) {

    const handleQtyChange = (newQty) => {
        const newPrice = newQty * props.unitprice;
        if (typeof props.tmpprice === 'function') {
            props.tmpprice(newPrice);
        }
        if (typeof props.holdsetfreeqty === 'function') {
            props.holdsetfreeqty(newQty);
        }
    };

    const holdqtyfnRef = useRef();
    holdqtyfnRef.current = handleQtyChange;

    useEffect(() => {
        holdqtyfnRef.current(props.holdfreeqty);
    }, [props.holdfreeqty, props.unitprice]);


    const Increase = () => {
        handleQtyChange(props.holdfreeqty + 1);
    };

    const decrease = () => {
        if (props.holdfreeqty > 1) {
            handleQtyChange(props.holdfreeqty - 1);
        }
    };

    return (
        <div className='qty'>
            <Button onClick={decrease}><BsDashLg /></Button>
            <span>{props.holdfreeqty}</span>
            <Button onClick={Increase}><BsPlusLg /></Button>
        </div>
    );
}

Qty.propTypes = {
    holdfreeqty: PropTypes.number,
    unitprice: PropTypes.number,
    tmpprice: PropTypes.func,
    holdsetfreeqty: PropTypes.func,
};

export default Qty;
