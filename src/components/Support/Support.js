import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';




export default class Support extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <View>
        <Text>Support</Text>
      </View>
    );
  }
}