import React from 'react';
import { Stack } from 'react-bootstrap';
import TabMenues from './TabMenues';

const Tabbar = (props) => {
  
  const TempIcons = props.TmpIconTabMenues;
  return (
    <Stack className={props.StyleTabBar} direction="horizontal" gap={3}>
      {
        Object.keys(TempIcons).map((itemKey, index) => {
          const ArrIcons = TempIcons[itemKey];
          return (
            <TabMenues
              ICM={ArrIcons}
              TabBar={props.tabBar}
              key={index}
              id={index}
              OnClicked = {props.HoldTabMenuClick}
              HoldMenuName = {props.HoldMenuName}
            />
          );
        })
      }
    </Stack>
  )
};

export default Tabbar;