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
import Toast, {DURATION} from 'react-native-easy-toast';
import css from '../../Styles/login.styles';
import {api} from "../../../env";

const logo = require('../../../assets/img/logo/logo.png');
const bg = require('../../../assets/img/bg/login/login.jpg');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.auth = this.auth.bind(this);
    this.__renderToaster = this.__renderToaster.bind(this);
  }

  __renderToaster = () => (
    <View style={css.toasterContainer}>
      <Text style={css.toasterText}>Usuario ou senha invalida</Text>
    </View>
  )
  async auth() {
    await axios.post(`${api.apiUrl}/authenticate`, {
      email: this.state.email,
      password: this.state.password,
      grant_type: 'password',
      client_id: '3',
      client_secret: 'Nrk3ew8twSUZ8hKeixbtt188EUZi6vI3ottGooBp',
      scope: ''
    }).then((res) => {
        this.refs.toastSuccess.show('Bem vindo a Brasal Corretora', 3200);
        AsyncStorage.setItem('@MySuperStore:token', res.data.success.token);
        Actions.main();
      })
      .catch((err) => {
        this.refs.toast.show('Usuario ou senha invalidos', 3200);
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

          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.auth}>
            <Text style={css.label}>ENTRAR</Text>
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
