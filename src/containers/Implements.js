import { CardResoures } from "./CardResoures";
const ImplementsTabMenu = (id, setTmpKeyName) => {
  const TmpCardArr = CardResoures;
  TmpCardArr.forEach((itemObj) => {
    Object.keys(itemObj).forEach((itemKey, index) => {
      if (id === index) {
        setTmpKeyName(itemKey)
      }
    });
  });
};

const TotalPrice = (values) => {
  let total = 0;

  if (Array.isArray(values)) {
      total = values.reduce((sum, value) => sum + value, 0);
  } else {
      total = values;
  }

  return total;
};


export { ImplementsTabMenu, TotalPrice };

