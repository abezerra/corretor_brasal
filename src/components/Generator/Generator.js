import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import css from '../../Styles/generator.styles';

const image = require('../../../assets/img/gen/img.jpeg')

export default class Generator extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <View style={css.main}>
        <View style={css.header}>
          <Text style={css.headerTitle}>Generator</Text>
        </View>
        
        <ScrollView style={css.container}>
          <View style={css.containerOfTwoImages}>
            <Image  source={image} style={css.generatedImage}/>
            <Image  source={image} style={css.generatedImage}/>
          </View>
          <View style={css.containerOfTwoImages}>
            <Image  source={image} style={css.generatedImage}/>
            <Image  source={image} style={css.generatedImage}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}