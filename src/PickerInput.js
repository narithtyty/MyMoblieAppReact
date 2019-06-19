import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker,Icon } from 'native-base';
import {} from 'react-native-vector-icons'
export default class PickerInputExample extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      ItemList:[{label:'Wallet',value:'key0'},
                  {label:'ATM Card',value:'key1'},
                  {label:'Debit Card',value:'key2'},
                  {label:'Credt Card',value:'key3'},
                  {label:'Net Banking',value:'key4'}
                ]
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    var item =this.state.ItemList.map(function(item,key){
        return <Picker.item label={item.label} value={item.value} key={key} />
    });
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item picker rounded>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                inLineLabel={true}>
                
              {
                /*
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
                 */
              }
          
              {
                //this.state.ItemList.map((member, key) => {
                 //return <Item label={member.label} value={member.value} key={key}/>
              //})
              item
            }
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}