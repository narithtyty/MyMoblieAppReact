import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar,CalendarList,Agenda} from 'react-native-calendars';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }
  render() {
    return (
      <View>
          <Calendar  theme={{
                'stylesheet.day.basic':{
                  'base':{
                    width:30,
                    height:70
                  }
                },
                textDayFontSize: 20,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
            }}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            //horizontal={true}
            //calendarHeight ={500}
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={2}
            onDayPress={(day) => {       
              console.log('selected day', day)
              this.props.navigation.navigate('Form');
            }}
            //monthFormat={'yyyy MM'}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={2}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});