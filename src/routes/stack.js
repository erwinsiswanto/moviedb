import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Detail from '../pages/Detail';
import Now from '../pages/Now';
import Search from '../pages/Search';
import Popular from '../pages/Popular';
import Top from '../pages/Top';
import Upcoming from '../pages/Upcoming';

export default (StackNav = StackNavigator({
    Now: {screen: Now},
    Detail: {screen: Detail},
    Search: {screen: Search},
    Popular: {screen: Popular},
    Top: {screen: Top},
    Upcoming: {screen: Upcoming}
}));