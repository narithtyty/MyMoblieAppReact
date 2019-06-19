import React from 'react';
import {  View,StyleSheet,StatusBar,AsyncStorage,Image,TouchableOpacity,ScrollView } from 'react-native';
import {MainBackgroudColor} from '../constant';
import { Text,Container, Header, Title, Content, Tabs,Tab,Footer,TabHeading, FooterTab, Left, Right, Body, Icon ,Button,Card,CardItem,Thumbnail,Item,Input} from 'native-base';
import {} from 'react-native-vector-icons'
import Temp from './ComponentFooter';
import FlatGrip from './FlatGrid';
import PhoneDirection from './FlatGrid_1';
import LogOut from './LogOut'
import Pin from './Pin'
import Term from './TermCondition'
import Intruction from './Intruction'
import DrawerCustom from "./DrawerCustom";
import Form from "./Form";
import Calendar from './Calendar_1';
import QRCode from './QRcode';
import SideBar from './Sidebar';
import Touchid from './TouchID';
import { fromLeft ,fromRight} from 'react-navigation-transitions';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator,
    DrawerActions ,
    StackActions
  } from 'react-navigation';





class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          drawerLabel: "HOME Test",
          drawerIcon: ({ tintColor }) => (
            <Icon
              type="MaterialIcons"
              name="home"
              style={{ fontSize: 24, color: tintColor }}
            />
          )
        }
      }
  
    render() {
      //var token =this.props.nativation;
      //console.log(token.getParam());
      return (
        <Container>
         <Header  >
      
          
          <Button hasText transparent onPress={async() => {
                  //await AsyncStorage.clear();
                  //alert (await AsyncStorage.getItem('userToken'))
                  this.props.navigation.navigate('Phone');
              }}>
              <Icon 
              type="FontAwesome"
              name="address-book" />
              <Text>Phone Direction</Text>
            </Button>
           
            <Button hasText transparent onPress={() => {
                  this.props.navigation.navigate('QRCode');
              }}>
              <Icon 
              type="FontAwesome" 
              name="qrcode"
               />
              <Text>QR Code</Text>
            </Button>
          
         
        </Header>
       <Content>
       <FlatGrip navigation={this.props.navigation} />
       </Content>
       <Footer>
            <Temp navigation={this.props.navigation}/>
       </Footer>
     </Container>
      );
    }
  
    _showMoreApp = () => {
      //console.log(this.props.navigation.navigate('Other'));
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }
  
  class OtherScreen extends React.Component {
    static navigationOptions = {
      title: 'Lots of features here',
    };
  
    render() {
      return (
        <Container>
       <Content>
        <Button  onPress={() => {
           this._showMoreApp();
        }}>
           <Text>Click Me!</Text>
         </Button>
       </Content>
       <Footer>
         <FooterTab style={{backgroundColor : MainBackgroudColor}} >
           <Button vertical onPress={()=>{
             this.props.navigation.goBack()
           }}>
               <Icon type="FontAwesome" name="home" style={{fontSize: 40, color: 'white',marginRight:120}}/>
           </Button>
           <Button vertical   onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
               <Icon name="md-menu"  style={{fontSize: 40, color: 'white',marginLeft:120}}/>
           </Button>
         </FooterTab>
       </Footer>
     </Container>
      );
    }
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

class SettingsScreen extends React.Component {
  render() {
    var a = this.props.navigation.getParam('itemQRcode') ;
    alert(a);
    return (
      <Container>
      <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor : MainBackgroudColor}} ><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                  <Button  onPress={() => {
                  this.props.navigation.navigate('NewStack2');
              }}>
                  <Text>Click Me!</Text>
                </Button>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor : MainBackgroudColor}} ><Text>No Icon</Text></TabHeading>}>
          <Text>Click Me!</Text>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor : MainBackgroudColor}} ><Icon name="apps" /></TabHeading>}>
          <Text>Click Me!</Text>
          </Tab>
      </Tabs>
       
     
      <Footer>
          <Temp navigation={this.props.navigation}/>
      </Footer>
    </Container>
    );
  }
}

class SettingsScreen1 extends React.Component {
  render() {
    return (
      <Container>
       <Header searchBar rounded style={{backgroundColor : MainBackgroudColor}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      <Content padder>
      <TouchableOpacity activeOpacity={1} onPress={()=>{
          //alert(1);
          this.props.navigation.navigate('Equipment',{ title: 'Equipment List'})
      }}>
       <Card rounded>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/marval.jpg')} />
                <Body>
                  <Text>Request</Text>
                  <Text note>Sample</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody >
              <Image source={require('./assets/pic1.jpg')} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={()=>{
          //alert(1);
          this.props.navigation.navigate('Equipment',{ title: 'Equipment List'})
          }}>
          <Card rounded>
            <CardItem >
              <Left>
                <Thumbnail source={require('./assets/marval.jpg')} />
                <Body>
                  <Text>Request</Text>
                  <Text note>Sample</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody >
              <Image source={require('./assets/pic1.jpg')} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          </TouchableOpacity>
      </Content>
      
      <Footer >
            <Temp navigation={this.props.navigation}/>   
      </Footer>
     
    </Container>
    );
  }
}


export class AnatomyExample extends React.Component {
  
  render() {
    var title = this.props.navigation.getParam('title');
    alert(title);
    return (
      <Container>
        <Tabs>
          <Tab  heading={ <TabHeading style={{backgroundColor : MainBackgroudColor}} ><Text>Detail</Text></TabHeading>}>
              <Text> {title}</Text>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor : MainBackgroudColor}}  ><Text>Calendar</Text></TabHeading>}>
          <Calendar navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab style={{backgroundColor : MainBackgroudColor}}>
          <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
           
            <Button vertical onPress={()=>{this.props.navigation.navigate('Equipment',{title:'Test'})}}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
// Main Stack Below Drawer

   const stackTest = createStackNavigator({
     NewStackHome:{
      screen : HomeScreen,
       navigationOptions: {
           header: null,
        }
     },
     NewStack1: {
       screen : SettingsScreen
     },
     NewStack2:{
      screen : SettingsScreen1
     },
     Equipment:{
      screen : AnatomyExample
     },
     Phone:{
      screen : PhoneDirection
     },
     Calendar:{
      screen : Calendar
     },
     Form:{
      screen : Form
     },
     QRCode:{
      screen : QRCode
     },
   },{
    //initialRouteName: 'ScreenA',
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
    transitionConfig: () => fromRight(),
  })
// Drawer

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: stackTest,
    },
    Pin:{
        screen: Touchid
    },
    Intruction:{
        screen: Intruction
    },
    TermCondition:{
        screen: Term
    },
    logout:{
      screen: LogOut
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
          //contentComponent: DrawerCustom,
          drawerOpenRoute: 'DrawerOpen',
          drawerCloseRoute: 'DrawerClose',
          drawerToggleRoute: 'DrawerToggle',
          initialRouteName: "Home",
          drawerPosition : 'right',
          drawerBackgroundColor : '#E6E6FA',
          contentComponent: props => <SideBar {...props} />
    });


const AppDrawer = createAppContainer(AppDrawerNavigator);

// Stack  
const AppStack = createStackNavigator(
    { Home: 
      { screen: AppDrawerNavigator,
        //navigationOptions: {
        //    header: null,
        //}
    },
     Other: OtherScreen },{
        //headerMode: 'none',
    }); 
    
// Tab    
const TabNavigator = createBottomTabNavigator({
  Home: { screen: AppStack },
  Settings: { screen: SettingsScreen },
});


//export default createAppContainer(AppDrawerNavigator);
export default AppDrawerNavigator;