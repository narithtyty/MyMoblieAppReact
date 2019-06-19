import React, { PureComponent } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  View,
  PanResponder,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import UserInactivity from 'react-native-user-inactivity';

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

const toNumber = (str) => Number(str);

export default class App extends PureComponent {
  state = {
    active: true,
    text: '20000'
  };

  onAction = (active) => {
    this.setState({
      active,
    });
  }

  render() {
    const { active, text } = this.state;
    return (
      <UserInactivity
        timeForInactivity={toNumber(text)}
        checkInterval={10000}
        onAction={this.onAction}
      >
        <Text style={styles.paragraph}>
          Put your app here: 
          {
            active ? 'Active' : 'Inactive'
          }
        </Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          rejectResponderTermination={true}
          keyboardType="numeric"
        />
        <Button
          title="Here is a button for some reason"
          onPress={() => alert('hi')}
        />
      </UserInactivity>
    );
  }
}