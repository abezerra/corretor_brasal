import React, { Component } from 'react';
import { View, Text, Alert, StatusBar, Image, TouchableOpacity, TouchableHighlight, AsyncStorage, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob'

import css from "../../Styles/media_creator.styles";

export default class MediaCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', phone: ''}
    this.__subscribeImage = this.__subscribeImage.bind(this)
    this.__manipulateImage = this.__manipulateImage.bind(this)
  }
  
  __subscribeImage(){
  
  }
  
  componentWillMount(){
    this.__imageDownload();
  }
  
  async __imageDownload(){
    await RNFetchBlob.config({
      fileCache: true
    }).fetch('GET', 'http://127.0.0.1:8000/defaults/01.jpg')
      .then( res => console.log('download da imagem', res.base64()))
      .catch( error => console.log('erro ao fazer download da imagem', error))
  }
  
  async __manipulateImage(){
    await axios.post('http://laravel.test/api/image', {
      name: this.state.name,
      phone: this.state.phone
    })
      .then(res => {
        //Alert("Midia gravada com sucesso, verifique a sua biblioteca de midas do app!")
        this.setState({name: '', phone: ''})
        console.log('imagem alterada com sucesso', res.data)
      })
      .catch( error => console.log('erro ao gravar midia', error))
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
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Nome"
            multiline={false}
            placeholderTextColor="#fff" />
    
          <TextInput
            style={css.input}
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder="Telefone"
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff" />
          
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.__manipulateImage}>
            <Text style={css.label}>Gerar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}