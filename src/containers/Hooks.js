import { useState } from "react";

const useTmpKeyName = () => {
  const [TmpKeyName, setTmpKeyName] = useState('HotDrink'); // default TabBar is Hot drink
  return [TmpKeyName, setTmpKeyName];
};

const useTmpObjCards = () =>{
  const [TmpObj, setTmpObj] = useState([]);
  return [TmpObj, setTmpObj];
};

const useModalPopUp = () =>{
  const [modalShow, setModalShow] = useState(false);
  return[modalShow, setModalShow];
};

const useTmpQTY = () =>{
  const [TmpQty, setTmpQty] = useState(1);
  return [TmpQty, setTmpQty];
};

const useTmpPriceUpdate = () =>{
  const [TmpPrice, setTmpPrice] = useState();
  return [TmpPrice, setTmpPrice];
}

export { useModalPopUp, useTmpKeyName, useTmpObjCards, useTmpPriceUpdate, useTmpQTY };

