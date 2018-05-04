import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Auth/Login';
import Register from "./components/Auth/Register";
import Main from "./components/Main/Main";
import Sales from "./components/Sales/Sales";
import Scheedules from "./components/Scheedules/Scheedules";
import Generator from "./components/Generator/Generator";
import Support from "./components/Support/Support";
import History from "./components/History/History";
import MediaCreator from "./components/Generator/MediaCreator";

export default props => (
  <Router>
    <Scene key="login" component={Login} hideNavBar />
    <Scene key="register" component={Register} hideNavBar />
    <Scene key="main" component={Main} hideNavBar initil />
    <Scene key="sales" component={Sales} title="Vendas" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#005c5b'}} />
    <Scene
            key="scheedule"
            component={Scheedules}
            title="Agendamentos"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#005c5b'}}
            titleStyle={{
              fontSize: 20,
              color: '#fff',
            }}
            leftButtonIconStyle={{ tintColor: 'white' }}/>
      
    <Scene
            key="generator"
            component={Generator}
            title="Midias"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#005c5b'}}
            titleStyle={{
              fontSize: 20,
              color: '#fff',
            }}
            backButtonTintColor={{color: '#fff'}}
            leftButtonIconStyle={{ tintColor: 'white' }}/>
      
      
    <Scene
            key="creator"
            component={MediaCreator}
            title="Gerador de midia"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#005c5b'}}
            titleStyle={{
              fontSize: 20,
              color: '#fff',
            }}
            barButtonIconStyle={{tintColor: 'white'}}
            leftButtonIconStyle={{ tintColor: 'white' }}/>
      
    <Scene
            key="support"
            component={Support}
            title="Fale conosco"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#005c5b'}}
            titleStyle={{
              fontSize: 20,
              color: '#fff',
            }}
            barButtonIconStyle={{tintColor: 'white'}}
            leftButtonIconStyle={{ tintColor: 'white' }}/>
      
    <Scene
            key="history"
            component={History}
            title="Historico de vendas"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#005c5b'}}
            titleStyle={{
              fontSize: 20,
              color: '#fff',
            }}
            barButtonIconStyle={{tintColor: 'white'}}
            leftButtonIconStyle={{ tintColor: 'white' }}/>
  </Router>
);
