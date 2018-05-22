import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Button,
  ImageBackground, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { api } from '../../../env';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLine } from "victory-native";

import css from '../../Styles/main.styles';

const sales = require('../../../assets/img/icons/sales.png');
const schedule = require('../../../assets/img/icons/phone.png');
const generate = require('../../../assets/img/icons/nuclear.png');
const contact = require('../../../assets/img/icons/email.png');
const history = require('../../../assets/img/icons/history.png');
const logo = require('../../../assets/img/logo/logo.png');

const bg = require('../../../assets/img/bg/login/login.jpg');

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', emial: '', cpf: '', user_id: '', listMetas: [] };
  }

  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    let options = { headers: { Authorization: `Bearer ${value}` } };
    await axios.get(`${api.apiUrl}/user`, options)
      .then((res) => {
        console.log('res do get user data', res)
        this.setState({
          name: res.data.name,
          email: res.data.email,
          cpf: res.data.cpf,
          user_id: res.data.id,
          role: res.data.role
        });

        axios.get(`${api.apiUrl}/metas/mymeta/${this.state.user_id}`, options)
              .then(res => {
                this.setState({listMetas: res.data})
              })
              .catch( error => console.log('erro ao buscar minhas metas', res.data))
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  }

  componentWillMount() {
    this.getToken();
  }

  __renderIndicators(){
    const role = this.state.role
    const data =  this.state.listMetas
    var met = []
    data.map( m => {
      met.push({ x: m.production_percentage, y: m.production_meta, label: m.description })
    })

    setTimeout((l) => {
      console.log('o meth d ameta', met)
    }, 999)
    return (
      <View style={css.containerIndicators}>

        <View style={css.headerIndicators}>
          <Text style={css.descriptionOfMeta}>this.state.description</Text>
          <Text style={css.date}>this.state.date</Text>
        </View>

        <View style={css.ratingViews}>

          <View style={css.leftRating}>
            <Text style={css.numberOfIndicator}>
            {/*this.state.production_meta */}
              80%
            </Text>
            <Text style={css.descriptionOfParadaLeft}>description of parada</Text>
          </View>

          <View style={css.rigthRating}>
            <Text style={css.numberOfIndicator}>
            20%
              {/*this.state.production_meta */}
            </Text>
            <Text style={css.descriptionOfParadaRight}>description of parada</Text>
          </View>

        </View>
        <View style={css.chartArea}>
            <VictoryPie
                        innerRadius={50}
                        padAngle={3}
                        theme={VictoryTheme.material}
                        data={met}
                        style={{
                          data: {
                            strokeWidth: 3
                          }
                        }}
                        />



        </View>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground source={bg} style={css.bg}>
      {/*<View style={css.main}>*/}
        {/*Rest of App come ABOVE the action button component!*/}
        {/*<ActionButton buttonColor="rgba(231,76,60,1)">*/}
          {/**/}
          {/*<ActionButton.Item buttonColor='#3498db' title="Vendas" onPress={() => Actions.sales()}>*/}
            {/*<Image source={sales}/>*/}
          {/*</ActionButton.Item>*/}
          {/**/}
          {/*<ActionButton.Item buttonColor='#3498db' title="Agendamentos" onPress={() => Actions.shceedule()}>*/}
            {/*<Image source={schedule}/>*/}
          {/*</ActionButton.Item>*/}
          {/**/}
          {/*<ActionButton.Item buttonColor='#1abc9c' title="generator" onPress={() => Actions.generator()}>*/}
            {/*<Image source={generate}/>*/}
          {/*</ActionButton.Item>*/}
          {/**/}
          {/*<ActionButton.Item buttonColor='#1abc9c' title="support" onPress={() => Actions.support()}>*/}
            {/*<Image source={contact}/>*/}
          {/*</ActionButton.Item>*/}
          {/**/}
          {/**/}
          {/*<ActionButton.Item buttonColor='#1abc9c' title="history" onPress={() => Actions.history()}>*/}
            {/*<Image source={history}/>*/}
          {/*</ActionButton.Item>*/}
          {/**/}
        {/*</ActionButton>*/}
        <View style={css.cotainer}>

          <View style={css.logo}>
            <Image source={logo} style={css.logoImage} />
          </View>

          <Text style={css.wellcomeClient}>Bem vindo, {this.state.name}</Text>
          {this.__renderIndicators()}

          {/*<TouchableOpacity style={css.sellerButton} underlayColor="#8a0fe7" onPress={() => Actions.sales()}>*/}
            {/*<Text style={css.label}>Vendas</Text>*/}
          {/*</TouchableOpacity>*/}

          <TouchableOpacity style={css.scheduleCallButton} underlayColor="#3d81e1" onPress={() => Actions.scheedule()}>
            <Text style={css.label}>AGENDAR LIGAÇÃO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={css.mediaGeneratorButton} underlayColor="#000" onPress={() => Actions.generator()}>
            <Text style={css.label}>GERADOR DE MIDIA</Text>
          </TouchableOpacity>

          {/*<TouchableOpacity style={css.ascomButton} underlayColor="#666666" onPress={() => Actions.support()}>*/}
            {/*<Text style={css.label}>Fale conosco</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*<TouchableOpacity style={css.historyButton} underlayColor="#400ae8" onPress={() => Actions.history()}>*/}
            {/*<Text style={css.label}>Historico de vendas</Text>*/}
          {/*</TouchableOpacity>*/}
        </View>
      </ImageBackground>
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
