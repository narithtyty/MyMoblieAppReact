import React, { Component } from 'react';
import { View ,Icon} from 'native-base';
import {Asyncstorage} from 'react-native'

//  class LogOut extends Component {

//   constructor(props){
//     super(props)
//   }
//   componentWillMount() {
//     Asyncstorage.clear();
//     this.props.navigation.navigate('Auth');
//   } 
//   render(){
//     return(<View></View>);
//   }
// }


class LogOut extends Component {

  static navigationOptions = {
    drawerLabel: 'LOG OUT',
    drawerIcon: ({ tintColor }) => (
      <Icon type="MaterialIcons" name="exit-to-app" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //Clear session and user data.
    //this.props.onSetUserData()
    //this.props.onResetSampleList()
    //this.props.onRemoveRequestOffline()
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View />
    )
  }
}
export default LogOut;