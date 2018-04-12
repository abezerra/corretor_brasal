import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import css from '../../Styles/login.styles';

const logo = require('../../../assets/img/logo/logo.png');
const bg = require('../../../assets/img/bg/login/login.jpg');

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
    this.auth = this.register.bind(this);
  }
  
  async register() {
    await axios.post('http://127.0.0.1:8000/api/register', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
        AsyncStorage.setItem('@MySuperStore:token', res.data.success.token);
        Actions.login();
      })
      .catch((err) => {
        console.log('Erro ao se logar', err);
      });
  }
  
  render() {
    return (
      <ImageBackground source={bg} style={css.bg}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={css.loginCotainer}>
          
          <View style={css.logo}>
            <Image source={logo} style={css.logoImage} />
          </View>
          
          <TextInput
            style={css.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Nome"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
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
          
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.register}>
            <Text style={css.label}>Cadastrar</Text>
          </TouchableOpacity>
          
          <TouchableHighlight onPress={() => Actions.login()}>
            <Text style={css.signup}> Ja possuo casdastro</Text>
          </TouchableHighlight>
        </View>
        {/* </View> */}
      </ImageBackground>
    );
  }
}
