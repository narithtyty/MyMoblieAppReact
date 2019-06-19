import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  Dimensions
} from "react-native";
import {
  Item,
  Input,
  Button,
  Text,
  Icon,
  Spinner,
  Container
} from "native-base";
//import axios from 'axios';
import { withNavigation } from "react-navigation"
import { Row, Grid } from "react-native-easy-grid";
//import DeviceInfo from 'react-native-device-info'


// Main SignIn Componect
const {width,height} =Dimensions.get('window');
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        showPass: false ,
        username:'',
        password:'',
        uniqueId: ''

    };
  }

  static navigationOptions = {
    header: null,
    };

  _onChangeUsername=(username)=>{
      this.setState({username})
  }

  _onChangePassword=(password)=>{
    this.setState({password})
  } 

  _onSubmit=()=>{
 
    this.props.navigation.navigate('App');
   
}

get_userdata = (token) => {

    var path ="http://192.168.199.65:88/wsapi/v1/API_GET_USER_INFO" +
         "?data=" +
          JSON.stringify({ pUSER_ID: this.state.username, pDEVICE_ID: this.state.uniqueId });
    console.log(path);        

    axios
      .get(
        "http://192.168.199.65:88/wsapi/v1/API_GET_USER_INFO" +
          "?data=" +
          JSON.stringify({ pUSER_ID: this.state.username, pDEVICE_ID: this.state.uniqueId }),
        {
          timeout: 60000,
          headers: {
            Authorization: "bearer " + token.access_token
          }
        }
      )
      .then( response => {
         // this._storeData(token.access_token)   // get Store Data token.acess_token
            console.log('Login Sucessful');
            this._storeData(token.access_token);
            this.props.navigation.navigate('Details');
        }
      )
      .catch(
        function(error) {
          alert('errr');
        }
      )
  } 
  
  _storeData = async (token) => {

      await AsyncStorage.setItem('token', token);  // set AsycStorage token
      this._getStorDataToken;
  }

  _getStorDataToken = async ()=>{
      var test =await AsyncStorage.getItem('token');
      console.log(test);
  }
  
  componentDidMount(){
    try {
      let info = DeviceInfo.getUniqueID()    // Get DeviceInfoID
      this.setState({uniqueId: info})
    }
    catch(err) {
      this.setState({uniqueId: "-"})
    }
  }

  render() {

    const MAIN_APP_COLOR = "#69C0E6";
    const SECOND_APP_COLOR = "#FFFFFF";
    const MAIN_GRAY = "#666666";
    const SECOND_GRAY = "#CCCCCC";

    const { showPass } = this.state;
    return (
      <Container style={{}}>
        {/** ImageBackgroud */}
        <ImageBackground
          source={require("./assets/images/background/bg.png")}
          style={{ width:width,height:height}}
        >
          <Grid>
            {/**  Image Lube Chack Header*/}

            <Row
              style={{ justifyContent: "center", alignItems: "center" }}
              size={30}
            >
              <Image
                style={{ width: "70%", height: "70%" }}
                resizeMode="contain"
                source={require("./assets/images/logo4-01.png")}
              />
            </Row>

            {/**   Container Username and Passwrod */}

          <Row style={{ justifyContent: "center" }} size={40}>
            <View style={{ flex: 1, padding: 16 }}>
              <Item regular style={{ borderRadius: 6, marginBottom: 16 }}>
                {/** Icon NativeBase */}

                {/** UserName */}
                <Icon
                  type="MaterialIcons"
                  name="person"
                  style={{ color: MAIN_GRAY }}
                />
                 <Input
                  onChangeText={this._onChangeUsername}
                  placeholder="E-mail/Username"
                  placeholderTextColor={SECOND_GRAY}
                />
              </Item>

              {/** Password */}

              <Item regular style={{ borderRadius: 6 }}>
                <Icon name="key" style={{ color: MAIN_GRAY }} />
                <Input
                  secureTextEntry={showPass ? false : true}
                  onChangeText={this._onChangePassword}
                  placeholder="Password"
                  placeholderTextColor={SECOND_GRAY}
                />


                {/**  Show Password or not ; showPass is this.state */}


                {showPass ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showPass: false })
                    }}
                  >
                    <Icon
                      type="MaterialIcons"
                      name="visibility"
                      style={{ color: MAIN_GRAY }}
                    />
                  </TouchableOpacity>
                  
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showPass: true })
                    }}
                  >
                    <Icon
                      type="MaterialIcons"
                      name="visibility-off"
                      style={{ color: MAIN_GRAY }}
                    />
                  </TouchableOpacity>
                )}
              </Item>

              {/** this props onSubmit stay in SigningContainner */}    

              <Button
                rounded
                block
                style={[
                  styles.button,
                  {
                    backgroundColor: MAIN_APP_COLOR 
                  }
                ]}
                onPress={this._onSubmit}   
                //disabled={this.props.loading}
              >
                <Text>LOGIN</Text>
  
              </Button>
       

              </View>
          </Row>


            {/** Row image footer PTT */}
            <Row
              style={{ justifyContent: "center", alignItems: "flex-end" }}
              size={30}
            >
              <Image
                style={{ height: "70%", width: "70%" }}
                source={require("./assets/images/logo2.png")}
              />
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff"
  }
});

export default withNavigation(SignIn);
