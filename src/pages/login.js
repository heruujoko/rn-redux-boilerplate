import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { appBorderRadius, appPadding, mainAppColor, mainBackground,secondaryBackground } from '../variables';
import { mapStateToProps, mapDispatchToProps } from '../helpers/reduxMapper';
import { Actions } from 'react-native-router-flux';

import Loading from '../components/loading';
import Alert from '../components/alert';

import api from '../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: appPadding,
    backgroundColor: mainBackground
  },
  inputContainer: {
    flex: 1
  },
  loginInput: {
    width: '100%',
    backgroundColor: secondaryBackground,
    borderRadius: appBorderRadius,
    padding: appPadding,
    color: mainAppColor,
    marginTop: 10
  },
  loginBtn: {
    backgroundColor: mainAppColor,
    padding: appPadding,
    alignItems: 'center',
    marginTop: 10
  }
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      alert: false,
      alertMsg: ''
    };

    this.handleChange = fieldName => (value) => {
      const obj = {};
      obj[fieldName] = value;
      this.setState(obj);
    };
  }

  onLogin() {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.actions.setBusy(true);
    api.login(data).then((res) => {
      this.props.actions.setSession(res.data);
      this.props.actions.setBusy(false);
      Actions.dashboard();
    })
      .catch((err) => {
        console.log(err);
        this.props.actions.setBusy(false);
        this.toggleAlert(true, err.response.data);
      });
  }

  toggleAlert(val, message) {
    this.setState({
      alert: val,
      alertMsg: message
    });
  }

  render() {
    return (
      <Container>
        <Loading show={this.props.app.busy} />
        {this.state.alert ? <Alert title={'Login error'} message={this.state.alertMsg} toggleAlert={() => this.toggleAlert()} /> : null}
        <View style={styles.container}>
          <View style={{ flex: 2 }} />
          <View style={styles.inputContainer}>
            <TextInput onChangeText={this.handleChange('email')} value={this.state.email} style={styles.loginInput} placeholder={'Email'} underlineColorAndroid={secondaryBackground} />
            <TextInput onChangeText={this.handleChange('password')} value={this.state.password} secureTextEntry style={styles.loginInput} placeholder={'Password'} underlineColorAndroid={secondaryBackground} />
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.onLogin()}>
              <Text style={{ color: '#fff' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
