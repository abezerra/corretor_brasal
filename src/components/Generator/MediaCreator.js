import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage,
  TextInput,
  CameraRoll,
} from 'react-native';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob'
import css from "../../Styles/media_creator.styles";
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import { Actions } from 'react-native-router-flux';
import Generator from "./Generator";
import {api} from "../../../env";

// const { config, fs } = RNFetchBlob;
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
  
  getLocalPath (url) {
    const filename = url.split('/').pop();
    return `${RNFS.DocumentDirectoryPath}/${filename}`;
  }
  
  async __manipulateImage(){
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    let options = { headers: { Authorization: `Bearer ${value}` } };
    await axios.post(`${api.apiUrl}/image`, {
      name: this.state.name,
      phone: this.state.phone
    }, options)
      .then(res => {
        this.setState({name: '', phone: ''})
        console.log('imagem gerada com sucesso', res.data)
  
        const url = res.data.path
        const localfile = this.getLocalPath(url)
  
        const options = {
          fromUrl: url,
          toFile: localfile
        };
        
        RNFS.downloadFile(options).promise
          .then( () => FileViewer.open(localfile))
          .then( res => {
            Actions.generator();
          })
          .catch( error => {
            console.log('Erro ao abrir dados')
          })
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
          <View style={css.viewOfInformations}>
            <Text style={css.boxInformatio}>
              Digite abaixo o nome e telefone que deseja
              que apareça na mídia
            </Text>
          </View>
          <TextInput
            underlineColorAndroid="transparent"
            style={css.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Nome"
            multiline={false}
            placeholderTextColor="#fff" />
    
          <TextInput
            underlineColorAndroid="transparent"
            style={css.input}
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder="Telefone"
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff" />
          
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.__manipulateImage}>
            <Text style={css.label}>GERAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}