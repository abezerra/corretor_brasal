import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import css from '../../Styles/main.styles';

const sales = require('../../../assets/img/icons/sales.png');
const schedule = require('../../../assets/img/icons/phone.png');
const generate = require('../../../assets/img/icons/nuclear.png');
const contact = require('../../../assets/img/icons/email.png');
const history = require('../../../assets/img/icons/history.png');


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', emial: '', cpf: '', user_id: '' };
  }
  
  // async getToken() {
  //   const value = await AsyncStorage.getItem('@MySuperStore:token');
  //   let options = { headers: { Authorization: `Bearer ${value}` } };
  //   await axios.get(`${api.apiUrl}/user`, options)
  //     .then((res) => {
  //       this.setState({ name: res.data.name, email: res.data.email, cpf: res.data.cpf, user_id: res.data.id });
  //       console.log('dadasnijgksafngijkasjkdfgfd', res.data)
  //     })
  //     .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  // }
  
  componentWillMount() {
    // setTimeout(() => {
    //   this.getToken();
    // }, 1200);
  }
  
  render() {
    return (
      <View style={css.main}>
        {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          
          <ActionButton.Item buttonColor='#3498db' title="Vendas" onPress={() => Actions.sales()}>
            <Image source={sales}/>
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#3498db' title="Agendamentos" onPress={() => Actions.shceedule()}>
            <Image source={schedule}/>
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="generator" onPress={() => Actions.generator()}>
            <Image source={generate}/>
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="support" onPress={() => Actions.support()}>
            <Image source={contact}/>
          </ActionButton.Item>
          
          
          <ActionButton.Item buttonColor='#1abc9c' title="history" onPress={() => Actions.history()}>
            <Image source={history}/>
          </ActionButton.Item>
          
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    width: 60,
    color: 'white',
  },
});
