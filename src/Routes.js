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

export default props => (
  <Router>
    {/*<Scene key="intro" component={Intro} hideNavBar />*/}
    {/*<Scene key="login" component={Login} hideNavBar />*/}
    {/*<Scene key="register" component={Register} hideNavBar />*/}
    {/*<Scene key="main" component={Main} hideNavBar initil />*/}
    {/*<Scene key="sales" component={Sales} title="Vendas" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#8ad57b'}} />*/}
    {/*<Scene key="scheedule" component={Scheedules} title="Agendamentos" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#8ad57b'}} />*/}
    <Scene key="generator" component={Generator} title="Gerador de midia" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#8ad57b'}} />
    {/*<Scene key="support" component={Support} title="Fale conosco" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#8ad57b'}} />*/}
    {/*<Scene key="history" component={History} title="Historico de vendas" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#8ad57b'}} />*/}
  </Router>
);
