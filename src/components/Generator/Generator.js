import React, {Component} from 'react';
import {View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import Share, {ShareSheet, Button} from 'react-native-share';
import css from '../../Styles/generator.styles';
import {api} from "../../../env";
import AvaliableMedias from "./AvaliableMedias";

const image = require('../../../assets/img/gen/img.jpeg')

export default class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, medias: []}
  }
  
  componentDidMount() {
    this.__availableMedias()
  }
  
  onCancel() {
    this.setState({visible: false})
  }
  
  onOpen() {
    this.setState({visible: true})
  }
  
  async __availableMedias() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    const options = {headers: {Authorization: `Bearer ${value}`}};
    await axios.get(`${api.apiUrl}/templatings/defaults`, options)
      .then(res => {
        this.setState({medias: res.data})
      })
      .catch(error => console.log('error to get medias', error))
  
    const allowedStorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
  }
  
  
  __renderAvailableMedias() {
    const {medias} = this.state
    if(medias !== 0){
      return(
        medias.map( (m) => (
            <AvaliableMedias key={m.id} item={m}/>
        ))
      )
    }
}


render()
{
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
      
      <Text style={css.headerTitle}>Mídias disponíveis</Text>
      <ScrollView>
        <View style={css.containerOfTwoImages}>
          {this.__renderAvailableMedias()}
        </View>
      </ScrollView>
    </View>
  );
}
}
