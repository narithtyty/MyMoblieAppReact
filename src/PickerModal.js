import React, { Component } from 'react';
import { Container, Header, Content, Input, Item ,Card,View,Icon,Textarea,Footer,FooterTab,Button} from 'native-base';
import PickerModal from 'react-native-picker-modal-view';

const items = [ { "Name": "United States", "Value": "United States", "Code": "US", "Id": 1 }, { "Name": "China", "Value": "China", "Code": "CN", "Id": 2 }, { "Name": "Japan", "Value": "Japan", "Code": "JP", "Id": 3 }, { "Name": "Germany", "Value": "Germany", "Code": "DE", "Id": 4 }, { "Name": "Turkey", "Value": "Turkey", "Code": "TR", "Id": 5 } ];

export default class example extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: {},
		};
	}
	render() {
		return (
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
		)
	}

	close() {
		console.log("close key pressed");
	}

	selected(selected) {
		this.setState({
			selectedItem: selected
		})
	}

	onBackRequest() {
		console.log("back key pressed");
	}
}