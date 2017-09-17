import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Spinner from 'react-native-spinkit'

import { mainAppColor } from '../variables'

class Loading extends Component {

  render() {
    if (this.props.show) {
      return (
        <View style={styles.loading}>
          <View style={styles.curtain}></View>
          <View style={styles.loadingBox}>
            <Spinner isVisible={true} size={50} type={'Wave'} color={mainAppColor} />
            <Text>loading</Text>
          </View>
        </View>
      )
    } else {
      return null
    }
  }

}

export default Loading

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  loading: {
    zIndex: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  curtain: {
    backgroundColor: '#444',
    zIndex: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8
  },
  loadingBox: {
    zIndex: 11,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
})