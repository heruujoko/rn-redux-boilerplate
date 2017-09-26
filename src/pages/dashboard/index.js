import React , {Component} from 'react';
import {View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';

import DasboardView from './dashboardView'

const styles = {
  container: {
    flex: 1
  }
}

class Dashboard extends Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <Container>
        <Header>
          <Body>
          <Title>Moneyz</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Tabs initialPage={1}>
            <Tab heading="Dashboard">
              <DasboardView/>
            </Tab>
            <Tab heading="Data Analysis">

            </Tab>
            <Tab heading="Profile">

            </Tab>
          </Tabs>
        </View>
      </Container>
    )
  }

}

export default Dashboard;