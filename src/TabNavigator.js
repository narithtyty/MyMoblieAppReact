import React from 'react';
import { Text, View,StyleSheet,Button ,StatusBar} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
  } from 'react-navigation';
import Pin from './Pin'
import Term from './TermCondition'
import Intruction from './Intruction'
import DrawerCustom from "./DrawerCustom";
class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showMoreApp = () => {
      //console.log(this.props.navigation.navigate('Other'));
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync =  () => {
      //await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }
  
  class OtherScreen extends React.Component {
    static navigationOptions = {
      title: 'Lots of features here',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      );
    }

    
  
    _signOutAsync =  () => {
      //await AsyncStorage.clear();
      this.props.navigation.navigate('Other1');
    };
  }

  class OtherScreen1 extends React.Component {
    static navigationOptions = {
      title: 'Lots of features here Test',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      );
    }

    
  
    _signOutAsync =  () => {
      //await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Pin:{
        screen: Pin
    },
    Intruction:{
        screen: Intruction
    },
    TermCondition:{
        screen: Term
    }
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
          drawerBackgroundColor : '#E6E6FA'
    });

//const AppDrawer = createAppContainer(AppDrawerNavigator);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
const AppStack = createStackNavigator(
    { Home: HomeScreen, 
      Other: OtherScreen ,
      Other1 : OtherScreen1
    });  
const TabNavigator = createBottomTabNavigator({
  Home: { screen: AppStack },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);