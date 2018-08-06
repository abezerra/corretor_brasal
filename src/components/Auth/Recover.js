import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
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

export default class Recover extends Component {
  
    constructor(props) {
    super(props);
    this.state = { email: '' };
    this.auth = this.auth.bind(this);
    this.__renderToaster = this.__renderToaster.bind(this);
  }

  __renderToaster = () => (
    <View style={css.toasterContainer}>
      <Text style={css.toasterText}>Usuario ou senha invalida</Text>
    </View>
  )
  async auth() {
    await axios.post(`${api.apiUrl}/password/reset`, {
      email: this.state.email,
      grant_type: 'password',
      client_id: '3',
      client_secret: 'Nrk3ew8twSUZ8hKeixbtt188EUZi6vI3ottGooBp',
      scope: ''
    }).then((res) => {
        this.refs.toastSuccess.show('Recuperação enviada pra seu email', 3200);
        console.log('res of recover', res)
        //Actions.login();
      })
      .catch((err) => {
        this.refs.toast.show('Houve um problema ao recurar sua senha', 3200);
        console.log('erro', err)
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
            positionValue={100}
            fadeOutDuration={2000}
            textStyle={{color:'#fff'}}/>

          <Toast
            ref="toastSuccess"
            style={{backgroundColor:'#8ad57b'}}
            position='top'
            positionValue={100}
            fadeOutDuration={2000}
            textStyle={{color:'#000'}}/>

         <View>
             <Text style={css.signup}>Recuperar senha</Text>
         </View>   
          <TextInput
            underlineColorAndroid="transparent"
            style={css.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="E-mail"
            multiline={false}
            placeholderTextColor="#fff"
          />


          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.auth}>
            <Text style={css.label}>RECUPERAR</Text>
          </TouchableOpacity>

          <TouchableHighlight onPress={() => Actions.login()}>
            <Text style={css.signup}>Voltar pro login</Text>
          </TouchableHighlight>

        </View>
        {/* </View> */}
      </ImageBackground>
    );
  }
}
