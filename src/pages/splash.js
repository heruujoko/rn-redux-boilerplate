import React, { Component } from 'react'
import { Container, Body, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

class Splash extends Component {

  componentDidMount() {
    setTimeout(() => {
      Actions.login()
    }, 3000)
  }

  render() {
    return (
      <Container>
        <Body>
          <Text>Auto 2000 Branch Collaboration System</Text>
        </Body>
      </Container>
    )
  }

}

export default Splash