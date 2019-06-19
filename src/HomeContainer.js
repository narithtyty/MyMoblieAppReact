import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Home from './Home'

export default class HomeContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: "HOME",
      header: false,
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
    return (
      <Container>
         <Header>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
         <Button  onPress={() => {
             //alert(1);
             console.log(this.props.navigation.navigate('Other'));
             //this.props.navigation.navigate('Other');
         }}>
            <Text>Click Me!</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor : '#36bab8'}} >
            <Button vertical >
                <Icon type="FontAwesome" name="home" style={{fontSize: 40, color: 'white',marginRight:120}}/>
            </Button>
            <Button vertical   onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="md-menu"  style={{fontSize: 40, color: 'white',marginLeft:120}}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}