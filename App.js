/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image} from 'react-native';
import store from './src/redux/config/store';
import { Provider } from 'react-redux';
import Detail from './src/pages/Detail';
import Index from './src/pages/Index';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        );
    }
}