import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import Temp from './ComponentFooter';
export default class HomeContainer extends Component {
  static navigationOptions = {
    drawerLabel: "TERMS & CONDITIONS 12",
    drawerIcon: ({ tintColor }) => (
      <Icon type="MaterialIcons" name="insert-drive-file" style={{ fontSize: 24, color: tintColor }} />
    )
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
          <Text>
            Term Condition
          </Text>
        </Content>
        <Footer>
            <Temp navigation={this.props.navigation}/>    
        </Footer>
      </Container>
    );
  }
}