import { BsCup, BsCupHot, BsCupStraw } from 'react-icons/bs';
import { CiBowlNoodles, CiBurger, CiPizza } from "react-icons/ci";
import { logo } from "../assets/images";


const ConLogo = {
    LOGOIMG : logo,
    NAME : ''
};

const ConIconTabMenues = {
    HotDrink : [BsCupHot, "Hot drink"],
    ColdDrink : [BsCupStraw, "Cold drink"],
    SoftDrink : [BsCup, "Soft drink"],
    Burger : [CiBurger, "Burger"],
    Sandwich : [CiPizza, "Sandwich"],
    Noodle : [CiBowlNoodles, "Noodle"],
}



export { ConIconTabMenues, ConLogo };

