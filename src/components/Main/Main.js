import React, {Component} from 'react';
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
  ImageBackground,
  ART,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {api} from '../../../env';
import axios from 'axios';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryLine
} from "victory-native";

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
    this.state = {name: '', emial: '', cpf: '', user_id: '', listMetas: [], daily: []};
  }
  
  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    let options = {headers: {Authorization: `Bearer ${value}`}};
    await axios.get(`${api.apiUrl}/user`, options)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          cpf: res.data.cpf,
          user_id: res.data.id,
          role: res.data.role
        });
        
        axios.get(`${api.apiUrl}/metas/mymeta/${this.state.user_id}`, options)
          .then(res => {
            this.setState({
              listMetas: res.data.weekly,
              daily: res.data.daily})
          })
          .catch(error => console.log('erro ao buscar minhas metas', res.data))
        
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  }
  
  componentWillMount() {
    this.getToken();
  }
  
  __henderHeader() {
    const daily = this.state.daily[0]
    console.log('daily', daily)
    
    if (daily == undefined || daily == null || daily == 0) {
      return (
        <View>
          <View style={css.headerIndicators}>
            <Text style={css.descriptionOfMeta}> Meta ainda não definida </Text>
          </View>
        </View>
      )
    } else if (daily !== undefined || daily !== null || daily !== 0) {
      return (
        <View>
          <View style={css.headerIndicators}>
            <Text style={css.descriptionOfMeta}> {this.state.daily[0].description}  </Text>
            <Text style={css.date}> {daily.day}</Text>
          </View>
          
          <View style={css.ratingViews}>
            
            <View style={css.leftRating}>
              <Text style={css.numberOfIndicator}>
                {daily.production_meta}
              </Text>
              <Text style={css.descriptionOfParadaLeft}>
                Metada diaria
              </Text>
            </View>
            
            <View style={css.rigthRating}>
              <Text style={css.numberOfIndicator}>
                {daily.production_percentage}
              </Text>
              <Text style={css.descriptionOfParadaRight}>Atingido</Text>
            </View>
          
          </View>
        </View>
      )
    }
  }
  
  __renderIndicators() {
    const role = this.state.role
    const data = this.state.listMetas
    
    console.log('lisa de metas', data)
    var met = []
    data.map(m => {
      met.push({
        x: m.production_percentage,
        y: m.production_meta,
        label: m.day,
      })
    })
    
    return (
      <View style={css.containerIndicators}>
        
        {this.__henderHeader()}
        
        <View style={css.chartArea}>

            <VictoryPie
              innerRadius={50}
              padAngle={3}
              theme={VictoryTheme.material}
              data={met}
              //width={300}
              height={300}
              style={{
                data: {
                  strokeWidth: 3
                },
                labels: { fontSize: 10, fill: "#000" }
              }}
            />
          {/*<VictoryChart height={200} width={200}*/}
                        {/*domainPadding={{ x: 50, y: [0, 20] }}*/}
                        {/*scale={{ x: "time" }}*/}
          {/*>*/}
            {/*<VictoryBar*/}
              {/*theme={VictoryTheme.material}*/}
              {/*data={met}*/}
            {/*/>*/}
          {/*</VictoryChart>*/}
        </View>
      </View>
    );
  }
  
  render() {
    return (
      <ImageBackground source={bg} style={css.bg}>
        <View style={css.cotainer}>
          
          <View style={css.logo}>
            <Image source={logo} style={css.logoImage}/>
          </View>
          
          <Text style={css.wellcomeClient}>Bem vindo, {this.state.name}</Text>
          
          {/*<TouchableOpacity style={css.sellerButton} underlayColor="#8a0fe7" onPress={() => Actions.sales()}>*/}
            {/*<Text style={css.label}>METAS</Text>*/}
          {/*</TouchableOpacity>*/}
          
          <TouchableOpacity style={css.scheduleCallButton} underlayColor="#3d81e1" onPress={() => Actions.scheedule()}>
            <Text style={css.label}>AGENDAR LIGAÇÃO</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={css.mediaGeneratorButton} underlayColor="#000" onPress={() => Actions.generator()}>
            <Text style={css.label}>GERADOR DE MIDIA</Text>
          </TouchableOpacity>
         
          {this.__renderIndicators()}
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
