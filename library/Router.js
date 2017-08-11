import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const routeConfig = {
  Home: { screen: HomeScreen },
};

const Router = StackNavigator(routeConfig);

export default Router;