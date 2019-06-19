import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Icon, Text, Right } from "native-base";
const items = [
  {
    iconName: "logo-googleplus",
    text: "Google Plus"
  },
  {
    iconName: "logo-facebook",
    text: "Facebook"
  },
  {
    iconName: "logo-twitter",
    text: "Twitter"
  },
  {
    iconName: "logo-reddit",
    text: "Reddit"
  },
  {
    iconName: "logo-linkedin",
    text: "LinkedIn"
  },
];
export default class DynamicCardExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card
            dataArray={items}
            renderRow={item =>
              <CardItem button>
                <Icon active name={item.iconName} />
                <Text>{item.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </CardItem>
            }
          />
        </Content>
      </Container>
    );
  }
}