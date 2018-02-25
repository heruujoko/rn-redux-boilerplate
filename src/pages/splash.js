import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Toolbar, ToolbarBackAction, ToolbarAction, ToolbarContent, Text} from 'react-native-paper'
import Notification from 'react-native-in-app-notification';

import PushNotification from 'react-native-push-notification';


class Splash extends Component {

  constructor(){
      super();
      this.state = {
          token: 'abc'
      }
  }

  setupNotificationListener(){

      let self = this;

      PushNotification.configure({

          // (optional) Called when Token is generated (iOS and Android)
          onRegister: function(token) {
              console.log( 'TOKEN:', token );
              self.setState({ token: token.token })
          },

          // (required) Called when a remote or local notification is opened or received
          onNotification: function(notification) {
              console.log( 'NOTIFICATION:', notification );

              // process the notification

              // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
              // notification.finish(PushNotificationIOS.FetchResult.NoData);
              if(notification.foreground){
                  self.showNotif()
              } else {
                  PushNotification.localNotification({
                      /* Android Only Properties */
                      ticker: "My Notification Ticker", // (optional)
                      autoCancel: true, // (optional) default: true
                      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
                      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
                      bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
                  });
              }

          },

          // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
          senderID: "682198428784",

          // IOS ONLY (optional): default: all - Permissions to register.
          permissions: {
              alert: true,
              badge: true,
              sound: true
          },

          // Should the initial notification be popped automatically
          // default: true
          popInitialNotification: true,

          /**
           * (optional) default: true
           * - Specified if permissions (ios) and token (android and ios) will requested or not,
           * - if not, you must call PushNotificationsHandler.requestPermissions() later
           */
          requestPermissions: true,
      });
  }

  componentDidMount(){
      this.setupNotificationListener();
  }

  showNotif(){
    this.props.localNotification();
  }

  render() {
    return (
      <View>
          <Toolbar>
              <ToolbarBackAction
                  onPress={() => this.showNotif()}
              />
              <ToolbarContent
                  title="Title"
                  subtitle="Subtitle"
                  titleStyle={{ color: '#fff'}}
              />
              <ToolbarAction icon="search" onPress={() => {}} />
              <ToolbarAction icon="more-vert" onPress={() => {}} />
          </Toolbar>
          <View>
              <Text>{ this.state.token }</Text>
          </View>
      </View>
    )
  }

}

export default Splash
