
import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import HomeContainer from './HomeContainer'
import LogOut from './LogOut'
import Pin from './Pin'
import Pin1 from './Pin'
import Term from './TermCondition'
import Intruction from './Intruction'
import DrawerCustom from "./DrawerCustom";
//import LogOut1 from './AppNavigator'
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
  } from 'react-navigation';
class test extends Component {
  render(){
    return(<View><Text>Hello</Text></View>)
  }
}
const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeContainer,
    },
    Pin:{
        screen: Pin
    },
    Intruction:{
        screen: Intruction
    },
    TermCondition1:{
        screen: Term
    },
    },{
        contentOptions: {
            //activeTintColor: MAIN_APP_COLOR,
            //inactiveTintColor: MAIN_GRAY,
            itemsContainerStyle: {
              marginVertical: 0
            },
            iconContainerStyle: {
              opacity: 1
            }
          },
          contentComponent: DrawerCustom,
          drawerOpenRoute: 'DrawerOpen',
          drawerCloseRoute: 'DrawerClose',
          drawerToggleRoute: 'DrawerToggle',
          initialRouteName: "Home",
          drawerPosition : 'right',
          drawerBackgroundColor : '#E6E6FA',
          zIndex: 100
    });
const AppContainer = createAppContainer(AppDrawerNavigator);

class App extends Component {
    render() {
      return <AppContainer />;
    }
  }
  export default App;

