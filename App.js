/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchPage,
  },
  Results: { screen: SearchResults },
});

const AppContainer = createAppContainer(AppNavigator);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

