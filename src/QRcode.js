import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator
} from 'react-native';
import { RNCamera } from "react-native-camera"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View } from 'native-base';

export default class ScanScreen extends Component {
  constructor(props){
      super(props)
      this.state={
          isReady: false
      }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isReady: true})
    }, 1000)
  }
  onSuccess = (e) => {
   alert(e.data);
   this.props.navigation.navigate('NewStack1',{itemQRcode:e.data});
   //const callback= this.props.navigation.getParam('resultCallback');
    //callback(e.data);
    //this.props.navigation.goBack();
    //this.props.navigation.navigate('QRCode');
  }

  render() {
    return (
        <View style={styles.container}>
        {
            this.state.isReady ? (
                <QRCodeScanner
                    //cameraProps={{autoFocus: RNCamera.Constants.AutoFocus.on, flashMode: RNCamera.Constants.FlashMode.torch}}
                    cameraProps={{autoFocus: RNCamera.Constants.AutoFocus.on}}
                    onRead={this.onSuccess}
                    reactivateTimeout={2000}
                    reactivate={true}
                    topContent={
                    <Text style={styles.centerText}>
                        Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                    </Text>
                    }
                />
            ) : (
                <ActivityIndicator 
                size = "large"
                style = {styles.activityIndicator}
                />
              )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});