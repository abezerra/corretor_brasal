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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.auth = this.auth.bind(this);
  }
  
  async auth() {
    await axios.post('http://127.0.0.1:8000/api/authenticate', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
        AsyncStorage.setItem('@MySuperStore:token', res.data.success.token);
        Actions.main();
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
            <Text style={css.label}>Entrar</Text>
          </TouchableOpacity>
          
          <TouchableHighlight onPress={() => Actions.register()}>
            <Text style={css.signup}> Ainda não possui cadastro? registre-se</Text>
          </TouchableHighlight>
        </View>
        {/* </View> */}
      </ImageBackground>
    );
  }
}
