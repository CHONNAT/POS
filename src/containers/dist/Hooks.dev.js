"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTmpQTY = exports.useTmpPriceUpdate = exports.useTmpObjCards = exports.useTmpKeyName = exports.useModalPopUp = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useTmpKeyName = function useTmpKeyName() {
  var _useState = (0, _react.useState)('HotDrink'),
      _useState2 = _slicedToArray(_useState, 2),
      TmpKeyName = _useState2[0],
      setTmpKeyName = _useState2[1]; // default TabBar is Hot drink


  return [TmpKeyName, setTmpKeyName];
};

exports.useTmpKeyName = useTmpKeyName;

var useTmpObjCards = function useTmpObjCards() {
  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      TmpObj = _useState4[0],
      setTmpObj = _useState4[1];

  return [TmpObj, setTmpObj];
};

exports.useTmpObjCards = useTmpObjCards;

var useModalPopUp = function useModalPopUp() {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      modalShow = _useState6[0],
      setModalShow = _useState6[1];

  return [modalShow, setModalShow];
};

exports.useModalPopUp = useModalPopUp;

var useTmpQTY = function useTmpQTY() {
  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      TmpQty = _useState8[0],
      setTmpQty = _useState8[1];

  return [TmpQty, setTmpQty];
};

exports.useTmpQTY = useTmpQTY;

var useTmpPriceUpdate = function useTmpPriceUpdate() {
  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      TmpPrice = _useState10[0],
      setTmpPrice = _useState10[1];

  return [TmpPrice, setTmpPrice];
};

exports.useTmpPriceUpdate = useTmpPriceUpdate;