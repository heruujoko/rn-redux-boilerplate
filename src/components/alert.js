import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './../helpers/reduxMapper'

var { height, width } = Dimensions.get('window')

import { mainAppColor } from '../variables'

class Alert extends Component {

  render() {
    return (
      <View style={styles.loading}>
        <View style={styles.curtain}></View>
        <View style={styles.loadingBox}>
          <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 15 }}>{this.props.title}</Text>
            <Text>{this.props.message}</Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 40, paddingRight: 40, paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => this.props.toggleAlert(false)}>
              <Text style={{ color: mainAppColor, fontSize: 16 }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)

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
    borderRadius: 5,
    width: 0.8 * width,
    height: 0.25 * height,
    opacity: 1
  }
})