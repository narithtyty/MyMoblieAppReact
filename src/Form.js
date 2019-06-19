import React, { Component } from 'react';
import { Container, Header, Content,Picker, Form,Input, Item ,Card,View,Icon,Textarea,Footer,FooterTab,Button} from 'native-base';
import {Text} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import PickerModal from 'react-native-picker-modal-view';

const items = [ { "Name": "United States", "Value": "United States", "Code": "US", "Id": 1 }, { "Name": "China", "Value": "China", "Code": "CN", "Id": 2 }, { "Name": "Japan", "Value": "Japan", "Code": "JP", "Id": 3 }, { "Name": "Germany", "Value": "Germany", "Code": "DE", "Id": 4 }, { "Name": "Turkey", "Value": "Turkey", "Code": "TR", "Id": 5 } ];
import {MainBackgroudColor} from '../constant';
export default class RegularTextboxExample extends Component {
    state = {
        isStartDateTimePickerVisible: false,
        isEndDateTimePickerVisible: false,
        startdt:'',
        enddt:'',
        //selectedItem: {},
        selectedItem: '',
        selected2: ''
      };
     
      EndshowDateTimePicker = () => {
        this.setState({ isEndDateTimePickerVisible: true });
      };
     
      EndhideDateTimePicker = () => {
        this.setState({ isEndDateTimePickerVisible: false });
      };
     
      EndhandleDatePicked = date => {
        var d =moment(date).format('LLL');
        this.setState({
            enddt : d
        })
        this.EndhideDateTimePicker();
      };

      StartshowDateTimePicker = () => {
        this.setState({ isStartDateTimePickerVisible: true });
      };
     
      StarthideDateTimePicker = () => {
        this.setState({ isStartDateTimePickerVisible: false });
      };
     
      StarthandleDatePicked = date => {
        var d =moment(date).format('LLL');
        this.setState({
            startdt : d
        })
        this.StarthideDateTimePicker();
      };

    close() {
		console.log("close key pressed");
	}

	selected(selected) {
        console.log(selected);
		this.setState({
			selectedItem: selected.Value
		})
	}

	onBackRequest() {
		console.log("back key pressed");
    }
    
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
  render() {
    return (
        <>
      <Container>
        <Content padder>
        <Card>
            <View style={{margin:10}}>
                <Text style={{marginBottom:10 ,fontWeight:'bold'}}> Equipment ID :</Text>
                <Item regular style={{borderRadius:10, marginBottom:10}}>
                    <Input placeholder='' />
                </Item>
                <Text style={{marginBottom:10 ,fontWeight:'bold'}}> Start Date :</Text>
                <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',}}>
                
                    <Item regular style={{borderRadius:10, marginBottom:10,width:'85%'}}>
                        <Input  value={this.state.startdt}/>
                    </Item>
                    <Button transparent onPress={this.StartshowDateTimePicker}>
                        <Icon type="FontAwesome" name="calendar" style={{margin:10 ,color: 'black'}}/>
                    </Button>
                    
                </View>
                <Text style={{marginBottom:10 ,fontWeight:'bold'}}> End Date :</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',}}>
                    <Item regular style={{borderRadius:10, marginBottom:10,width:'85%'}}>
                        <Input  value={this.state.enddt}/>
                    </Item>
                    <Button transparent onPress={this.EndshowDateTimePicker}>
                        <Icon type="FontAwesome" name="calendar" style={{margin:10}}/>
                    </Button>
                </View>
                <Text style={{marginBottom:10 ,fontWeight:'bold'}}> Project No. :</Text>
                <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',}}>
                    <Item regular style={{borderRadius:10, marginBottom:10,width:'85%'}}>
                        <Input value={this.state.selectedItem}/>
                    </Item>
                    <PickerModal
				              renderSelectView={(disabled, selected, showModal) =>
                    <Button transparent onPress={showModal}>
                        <Icon type="FontAwesome" name="search" style={{margin:10}}/>
                    </Button>
				}
				onSelected={(selected) => this.selected(selected)}	
				onClosed={this.close.bind(this)}
				onBackButtonPressed={this.onBackRequest.bind(this)}
				items={items}
				sortingLanguage={'tr'}
				showToTopButton={true}
				selected={this.state.selectedItem}
				autoGenerateAlphabeticalIndex={true}
				selectPlaceholderText={'Choose one...'}
				onEndReached={() => console.log('list ended...')}
				searchPlaceholderText={'Search...'}
				requireSelection={false}
				autoSort={false}
			    />
                </View>
                <Text style={{marginBottom:10 ,fontWeight:'bold'}}> Bank Type :</Text>
               
            <Item picker regular style={{borderRadius:10, marginBottom:10}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          
                <Text style={{marginBottom:10 ,fontWeight:'bold'}}> Note :</Text>
                <Textarea rowSpan={5} bordered style={{borderRadius:10}}/>
            </View>
        </Card>
        
        </Content>
        <Footer >
            <FooterTab style={{backgroundColor : MainBackgroudColor}}>
                <Button>
                    <Text style={{fontSize:20,color:'white'}}>RESERVE</Text>
                </Button>
            </FooterTab>
      </Footer>
      </Container>
      <DateTimePicker
        isVisible={this.state.isEndDateTimePickerVisible}
        onConfirm={this.EndhandleDatePicked}
        onCancel={this.EndhideDateTimePicker}
        mode='datetime'
        />
        <DateTimePicker
        isVisible={this.state.isStartDateTimePickerVisible}
        onConfirm={this.StarthandleDatePicked}
        onCancel={this.StarthideDateTimePicker}
        />
      </>
    );
  }
}