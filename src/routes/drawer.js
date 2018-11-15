import React, {Component} from 'react';
import { DrawerNavigator } from 'react-navigation';
import Now from "./stack";
import Popular from './stack';
import Top from './stack';
import Upcoming from './stack';
import SideBar from '../layouts/Sidebar';

const DrawerNav = DrawerNavigator (
    {
        Now: {screen: Now},
        Popular: {screen: Popular},
        Top: {screen: Top},
        Upcoming: {screen: Upcoming}
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default DrawerNav;