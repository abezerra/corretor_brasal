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
import Toast, {DURATION} from 'react-native-easy-toast'
import css from '../../Styles/login.styles';
import {api} from "../../../env";

const logo = require('../../../assets/img/logo/logo.png');
const bg = require('../../../assets/img/bg/login/login.jpg');

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
    this.auth = this.register.bind(this);
    this.__renderToaster = this.__renderToaster.bind(this);
  }
  
  __renderToaster = () => (
    <View style={css.container}>
      <Toast ref="toast"/>
    </View>
  )
  
  async register() {
    await axios.post(`${api.apiUrl}/register`, {
      email: this.state.email,
      password: this.state.password,
      grant_type: 'password',
      client_id: '1',
      client_secret: 'c3cEQ9L7leTV4vnRbN8ehMmhjUdaSiGbys7xEn53',
      scope: ''
    }).then((res) => {
        this.refs.toastSuccess.show('Bem vindo a Brasal Corretora', 3200);
        AsyncStorage.setItem('@MySuperStore:token', res.data.success.token);
        Actions.login();
      })
      .catch((err) => {
        this.refs.toast.show('Erro ao se cadastrar, tente novamente.', 3200);
      });
  }
  
  render() {
    return (
      <ImageBackground source={bg} style={css.bg}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={css.loginCotainer}>
  
          <Toast
            ref="toast"
            style={{backgroundColor:'red'}}
            position='top'
            positionValue={200}
            fadeOutDuration={2000}
            textStyle={{color:'#fff'}}/>
  
          <Toast
            ref="toastSuccess"
            style={{backgroundColor:'#8ad57b'}}
            position='top'
            positionValue={200}
            fadeOutDuration={2000}
            textStyle={{color:'#000'}}/>
          
          <View style={css.logo}>
            <Image source={logo} style={css.logoImage} />
          </View>
          
          <TextInput
            underlineColorAndroid="transparent"
            style={css.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Nome"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            underlineColorAndroid="transparent"
            style={css.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Usuario"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            underlineColorAndroid="transparent"
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
