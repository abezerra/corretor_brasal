import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';
import css from '../../Styles/scheedule.styles';

const utcDateToString = (momentInUTC) => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  console.warn('na momentjs', s);
  return s;
};
export default class Scheedules extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }
  static addToCalendar = (title, startDateUTC) => {
    const eventConfig = {
      title,
      startDate: utcDateToString(startDateUTC),
      endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
    };
    
    AddCalendarEvent.presentEventDialog(eventConfig)
      .then((eventInfo ) => {
        if (eventInfo) {
        } else {
        }
      })
      .catch((error) => {
      });
  };
  
  static editCalendarEventWithId = (eventId) => {
    const eventConfig = {
      eventId,
    };
    
    AddCalendarEvent.presentEventDialog(eventConfig)
      .then(eventId => {
        console.warn(eventId);
      })
      .catch((error) => {
      });
  };

  
  render() {
    const eventTitle = this.state.text;
    const nowUTC = moment.utc();
    return (
      <View style={css.container}>
        <StatusBar
          barStyle="light-content"
        />
        
        <View style={css.loginCotainer}>
          <View style={css.lastEvent}>
            <Text style={css.labelInitial}>
              Agendamento de eventos
            </Text>
          </View>
    
          
          <TextInput
            underlineColorAndroid="transparent"
            style={css.input}
            placeholderTextColor="#fff"
            placeholder="Identificador do evento"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={() => Scheedules.addToCalendar(eventTitle, nowUTC)}>
            <Text style={css.label}>ADICIONAR AO CALENDÁRIO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}