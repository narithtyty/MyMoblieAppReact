import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createSwitchNavigator,createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Signin from './Signin';
import Drawer from './DrawerNavigator'

const RootStack = createSwitchNavigator(
  {
    Home: Signin,
    Details: Drawer,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}