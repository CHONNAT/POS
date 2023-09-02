"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConLogo = exports.ConIconTabMenues = void 0;

var _bs = require("react-icons/bs");

var _ci = require("react-icons/ci");

var _images = require("../assets/images");

var ConLogo = {
  LOGOIMG: _images.logo,
  NAME: ''
};
exports.ConLogo = ConLogo;
var ConIconTabMenues = {
  HotDrink: [_bs.BsCupHot, "Hot drink"],
  ColdDrink: [_bs.BsCupStraw, "Cold drink"],
  SoftDrink: [_bs.BsCup, "Soft drink"],
  Burger: [_ci.CiBurger, "Burger"],
  Sandwich: [_ci.CiPizza, "Sandwich"],
  Noodle: [_ci.CiBowlNoodles, "Noodle"]
};
exports.ConIconTabMenues = ConIconTabMenues;