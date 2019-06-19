import React from 'react';
import { Text, View,StyleSheet,StatusBar,AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon ,Button} from 'native-base';
import { StackActions ,NavigationActions} from 'react-navigation';
import {MainBackgroudColor} from '../constant';
export default class comFooter extends React.Component {
    render() {
        return (
            <FooterTab style={{backgroundColor : MainBackgroudColor}} >
            <Button vertical onPress={()=>{
                const resetAction = StackActions.reset({
                    index: 0,
                    key: null,
                    actions: [NavigationActions.navigate({ routeName: 'NewStackHome' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                    //this.props.navigation.dispatch(StackActions.popToTop());
              }} >
                <Icon type="FontAwesome" name="home" style={{fontSize: 30, color: 'white',marginRight:120}}/>
            </Button>
            <Button vertical   onPress={() => {
                this.props.navigation.openDrawer()
            }}>
                <Icon name="md-menu"  style={{fontSize: 30, color: 'white',marginLeft:120}}/>
            </Button>
          </FooterTab>
        )
    }
}