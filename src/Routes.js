import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Auth/Login';

export default props => (
  <Router>
    {/*<Scene key="intro" component={Intro} hideNavBar />*/}
    <Scene key="login" component={Login} hideNavBar />
    {/*<Scene key="main" component={App} hideNavBar initil />*/}
    {/*<Scene key="myinsurances" component={MyInsurances} title="Meus seguros" hideNavBar={false}  navigationBarStyle={{backgroundColor: '#8ad57b'}} />*/}
  </Router>
);
