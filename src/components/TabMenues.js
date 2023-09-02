import React from 'react';
import { Button } from 'react-bootstrap';

function TabMenues(props) {
  const [IconComponents, btnName] = props.ICM;
  const TT = props.HoldMenuName;
  return (
    <Button
      className="p-2 btnMenu"
      variant='null'
      onClick={() => props.OnClicked(props.id)}
      style={btnName.toLowerCase() === TT.toLowerCase() ? { background: 'black', color: 'white' } : {}}
    >
      <IconComponents /> {btnName}
    </Button>
  )
};

export default TabMenues;