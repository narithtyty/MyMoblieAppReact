import React, { Component } from 'react';
import {
  DrawerItems, 
  SafeAreaView ,
  AsyncStorage
} from 'react-navigation';
import { StyleSheet, ScrollView,TouchableOpacity ,Text,Alert} from 'react-native';
import DrawerProfile from './DrawerProfile';
class DrawerCustom extends Component {
  
  constructor(props){
    super(props);
  }

  _onClick= async () =>{
    var a = await AsyncStorage.getItem('userToken');
    alert (a);
  }
  render() {
    //alert(AsyncStorage.getItem('userToken'));
    return (
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerProfile/>
          <DrawerItems {...this.props} />
          {
              /*
                       <TouchableOpacity onPress={  ()=>{
                console.log(this.props.navigation);
                Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    // Clear AsyncStorage
                     //AsyncStorage.clear();
                     //this._onClick();
                     //console.log(AsyncStorage.removeItem('userToken'));
                    //await AsyncStorage.removeItem('userToken');
                    //console.log(this.props.navigation.navigate('AuthLoading'));
                    //this.props.navigation.navigate('Auth');
                    this.props.navigation.navigate('Logout');
                  }},
                ],
                { cancelable: false }
              )  
                }
            }>
              <Text style={{margin: 16,fontWeight: 'bold',color: 'black'}}>Logout</Text>
            </TouchableOpacity>
              */


          }
             
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerCustom;
