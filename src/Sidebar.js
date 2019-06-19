import React, { Component } from "react";
import { Image,AsyncStorage,Alert } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
import DrawerProfile from './DrawerProfile';
import AwesomeAlert from 'react-native-awesome-alerts';
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    type:'',
    bg: "#C5F442"
  },
  {
    name: "Pin",
    route: "Pin",
    icon: "lock",
    type:'MaterialIcons',
    bg: "#477EEA",
  },
  {
    name: "Intruction",
    route: "Intruction",
    icon: "info",
    type:'MaterialIcons',
    bg: "#DA4437",
  },
  {
    name: "TermCondition",
    route: "TermCondition",
    icon: "insert-drive-file",
    bg: "#C5F442",
    type:'MaterialIcons',
  },
    {
    name: "LogOut",
    route: "LogOut",
    icon: "exit-to-app",
    bg: "#C5F442",
    type:"MaterialIcons"
    }
  
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  
  render() {
    return (
      <Container>
        
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <DrawerProfile/>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={ () => {
                    //alert (await AsyncStorage.getItem('userToken'));
                    //var a = await AsyncStorage.getItem('userToken');
                    //alert (data.route);
                    if(data.route!='LogOut'){
                        this.props.navigation.navigate(data.route);
                    }
                    else{
                        
                        Alert.alert(
                            'Log out',
                            'Do you want to logout?',
                            [
                            {text: 'Cancel', onPress: () => {return null}},
                            {text: 'Confirm', onPress: async() => {
                                    await AsyncStorage.clear();
                                    this.props.navigation.navigate('Auth');
                            }},
                            ],
                            { cancelable: false }
                        )  
                    }
                    
                }
                
                }
              >
                <Left>
                  <Icon
                    active
                    type={data.type}
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
