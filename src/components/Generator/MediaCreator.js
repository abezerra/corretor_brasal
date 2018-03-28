import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, TouchableHighlight, AsyncStorage, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import css from "../../Styles/media_creator.styles";

export default class MediaCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', phone: ''}
    console.log('la props', props)
  }
  
  
  render() {
    return (
      <View style={css.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={css.loginCotainer}>
          <TextInput
            style={css.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Usuario"
            multiline={false}
            placeholderTextColor="#fff"
          />
    
          <TextInput
            style={css.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Senha"
            secureTextEntry
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff"
          />
    
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.auth}>
            <Text style={css.label}>Gerar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}