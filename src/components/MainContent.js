import React from 'react';
import { addSpacingToUppercase } from '../Helper/AddSpacingToUppercase';
import '../assets/Style/Header.css';
import { useTmpKeyName } from '../containers/Hooks';
import { ImplementsTabMenu } from '../containers/Implements';
import Cards from './Cards';
import Tabbar from './Tabbar';

const MainContent = (props) => {
  const [TmpKeyName, setTmpKeyName] = useTmpKeyName();

  const TabMenuClick = (id) => {
    ImplementsTabMenu(id, setTmpKeyName)
  };

  const TmpArr = props.CardResoures;
  const arrobjcars = props.popupclicked;
  return (
    <div className={props.StyleMainContent}>
      <Tabbar
        TmpIconTabMenues={props.IconTapMenues}
        StyleTabBar={props.StyleTabBar}
        HoldTabMenuClick={TabMenuClick}
        HoldMenuName = {addSpacingToUppercase(TmpKeyName)}
      />

      <div>
        <div>{
          TmpArr.map((item, index) =>{
            return(
              <h1 key={index}>
                {addSpacingToUppercase(TmpKeyName)}
              </h1>
            )
          })
        }</div>
        <div className={props.StyleCard}>
          {TmpArr.map((arr, outerIndex) => {
            const keys = Object.keys(arr); // Extract the keys of the object
            if (keys.includes(TmpKeyName)) {
              return (
                arr[TmpKeyName].map((obj, innerIndex) => (
                  <Cards
                    key={innerIndex}
                    ObjCard={obj}
                    id={innerIndex}
                    modalstyle = 'modalsyle'
                    popupclicked = {arrobjcars}
                    holdfreeqty ={props.holdfreeqty}
                    holdsetfreeqty = {props.holdsetfreeqty}
                  />
                ))
              );
            }
            return null;
          })}
        </div>

      </div>
    </div>
  )
}

export default MainContent;