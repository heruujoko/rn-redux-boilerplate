import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import Notification from 'react-native-in-app-notification';
import store from './store'

// pages
import Splash from './pages/splash'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
        secondaryText: '#fff'
    }
}

class App extends Component {

    constructor(){
        super();
    }

    localNotification(){
        this.notification.show({
            title: 'You pressed it!',
            message: 'The notification has been triggered'
        })
    }

    componentDidMount(){
        this.localNotification();
    }

    render() {
        let self = this;

        return (
            <View style={{ flex: 1}}>
                <PaperProvider theme={theme}>
                    <Provider store={store}>
                        <Router>
                            <Scene key="root">
                                <Scene key="splash" component={Splash} hideNavBar={true} title="splash" localNotification={() => this.localNotification()}/>
                            </Scene>
                        </Router>
                    </Provider>
                </PaperProvider>
                <Notification ref={(ref) => this.notification = ref }/>
            </View>
        )
    }

}

export default App
