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
        // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
        // These are two different identifiers on iOS.
        // On Android, where they are both equal and represent the event id, also strings.
        // when false is returned, the dialog was dismissed
        if (eventInfo) {
          console.warn(JSON.stringify(eventInfo));
        } else {
          console.warn('dismissed');
        }
      })
      .catch((error) => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  };
  
  static editCalendarEventWithId = (eventId) => {
    const eventConfig = {
      eventId,
    };
    
    AddCalendarEvent.presentEventDialog(eventConfig)
      .then(eventId => {
        // eventId is always returned when editing events
        console.warn(eventId);
      })
      .catch((error) => {
        // handle error such as when user rejected permissions
        console.warn(error);
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
              {/*date:{' '}*/}
              {/*{moment*/}
                {/*.utc(nowUTC)*/}
                {/*.local()*/}
                {/*.format('lll')}*/}
            </Text>
          </View>
    
          
          <TextInput
            style={css.input}
            placeholderTextColor="#fff"
            placeholder="Identificador do evento"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={() => Scheedules.addToCalendar(eventTitle, nowUTC)}>
            <Text style={css.label}>ADICIONAR AO CALENDÁRIO</Text>
          </TouchableOpacity>
          {/*<Button*/}
            {/*onPress={() => {*/}
              {/*Scheedules.addToCalendar(eventTitle, nowUTC);*/}
            {/*}}*/}
            {/*title="Adicionar ao calendario"*/}
            {/*style={css.button}*/}
          {/*/>*/}
        </View>
      </View>
    );
  }
}