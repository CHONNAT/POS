"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TotalPrice = exports.ImplementsTabMenu = void 0;

var _CardResoures = require("./CardResoures");

var ImplementsTabMenu = function ImplementsTabMenu(id, setTmpKeyName) {
  var TmpCardArr = _CardResoures.CardResoures;
  TmpCardArr.forEach(function (itemObj) {
    Object.keys(itemObj).forEach(function (itemKey, index) {
      if (id === index) {
        setTmpKeyName(itemKey);
      }
    });
  });
};

exports.ImplementsTabMenu = ImplementsTabMenu;

var TotalPrice = function TotalPrice(values) {
  var total = 0;

  if (Array.isArray(values)) {
    total = values.reduce(function (sum, value) {
      return sum + value;
    }, 0);
  } else {
    total = values;
  }

  return total;
};

exports.TotalPrice = TotalPrice;