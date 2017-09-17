import React, { Component } from 'react'
import { View } from 'react-native'
import { StyleProvider } from 'native-base'
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material';
import { Provider } from 'react-redux'
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import store from './store'

// pages
import Splash from './pages/splash'
import Login from './pages/login'

class App extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <Router>
            <Scene key="root">
              <Scene key="splash" component={Splash} hideNavBar={true} title="splash" />
              <Scene key="login" component={Login} hideNavBar={true} title="login" />
            </Scene>
          </Router>
        </Provider>
      </StyleProvider>
    )
  }

}

export default App