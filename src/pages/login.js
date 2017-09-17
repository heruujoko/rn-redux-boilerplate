import React, { Component } from 'react'
import { Container } from 'native-base'
import { View, Image, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native'
import { appBorderRadius, appPadding, mainAppColor } from '../variables'
import { mapStateToProps, mapDispatchToProps } from '../helpers/reduxMapper'
import { connect } from 'react-redux'

import Loading from '../components/loading'
import Alert from '../components/alert'

import api from '../services/api'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      nik: "",
      password: "",
      alert: false,
      alertMsg: ""
    }

    this.handleChange = (fieldName) => (value) => {
      obj = {}
      obj[fieldName] = value
      this.setState(obj)
    }
  }

  toggleAlert(val, message) {
    this.setState({
      alert: val,
      alertMsg: message
    })
  }

  onLogin() {
    let data = {
      nik: this.state.nik,
      password: this.state.password
    }
    this.props.actions.setBusy(true)
    api.login(data).then(res => {
      this.props.actions.setSession(res.data)
      this.props.actions.setBusy(false)
    })
      .catch(err => {
        console.log(err.response.data)
        this.props.actions.setBusy(false)
        this.toggleAlert(true, err.response.data)
      })
  }

  render() {
    return (
      <Container>
        <Loading show={false} />
        {this.state.alert ? <Alert title={"Login error"} message={this.state.alertMsg} toggleAlert={this.toggleAlert.bind(this)} /> : null}
        <View style={styles.container}>
          <View style={{ flex: 2 }}></View>
          <View style={styles.inputContainer}>
            <TextInput onChangeText={this.handleChange('nik')} value={this.state.nik} style={styles.loginInput} placeholder={"NIK"} underlineColorAndroid={"#777"} />
            <TextInput onChangeText={this.handleChange('password')} value={this.state.password} secureTextEntry style={styles.loginInput} placeholder={"Password"} underlineColorAndroid={"#777"} />
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.onLogin()}>
              <Text style={{ color: "#fff" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: appPadding
  },
  inputContainer: {
    flex: 1
  },
  loginInput: {
    width: '100%',
    backgroundColor: "#777",
    borderRadius: appBorderRadius,
    padding: appPadding,
    color: "#fff",
    marginTop: 10
  },
  loginBtn: {
    backgroundColor: mainAppColor,
    padding: appPadding,
    alignItems: "center",
    marginTop: 10
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)