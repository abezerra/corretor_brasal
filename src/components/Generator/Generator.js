import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Share, {ShareSheet, Button} from 'react-native-share';
import css from '../../Styles/generator.styles';

const image = require('../../../assets/img/gen/img.jpeg')

export default class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false}
  }
  
  onCancel(){
    this.setState({visible: false})
    console.log('share canceled')
  }
  
  onOpen(){
    this.setState({visible: true})
    console.log('share is open')
  }
  
  
  render() {
    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };
    return (
      <View style={css.main}>
        <View style={css.header}>
          <Text style={css.headerTitle}>Generator</Text>
        </View>
        
        <Text style={css.headerTitle}>Midias disponiveis</Text>
        <ScrollView>
          <View style={css.containerOfTwoImages}>
            
            <TouchableOpacity onPress={()=> Actions.creator({image: image}) } >
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> Actions.creator() } >
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
            
          </View>
          <View style={css.containerOfTwoImages}>
            
            <TouchableOpacity onPress={()=> Actions.creator() } >
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> Actions.creator() } >
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
  
  
        <Text style={css.headerTitle}>Minhas midias</Text>
        <ScrollView>
          <View style={css.containerOfTwoImages}>
      
            <TouchableOpacity onPress={()=>{
              Share.open(shareOptions);
            }}>
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
      
            <TouchableOpacity onPress={()=>{
              Share.open(shareOptions);
            }}>
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
    
          </View>
          <View style={css.containerOfTwoImages}>
            <TouchableOpacity onPress={()=>{
              Share.open(shareOptions);
            }}>
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
      
            <TouchableOpacity onPress={()=>{
              Share.open(shareOptions);
            }}>
              <Image  source={image} style={css.generatedImage}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}