import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { mainAppColor,mainBackground, appPadding, secondaryBackground} from '../../variables';

const styles = {
  container: {
    alignItems: 'center',
    padding: appPadding
  },
  scoreText: {
    color: "#fff",
    fontSize: 20
  },
  summaryText: {
    color: "#fff",
    fontSize: 35
  },
  circle: {
    backgroundColor: secondaryBackground,
    width: 250,
    height: 250,
    borderRadius: 250,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50
  },
  scoreNum: {
    fontSize: 100,
    color: mainAppColor
  },
  finText: {
    color: "#fff",
    fontSize: 30
  }
};

class DashboardView extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <ScrollView style={{ height: '100%',backgroundColor: mainBackground}}>
        <View style={styles.container}>
          <Text style={styles.scoreText}>SCORE</Text>
          <View style={styles.circle}>
            <Text style={styles.scoreNum}>8</Text>
          </View>
          <Text style={styles.summaryText}>FAIR</Text>
          <View style={{ alignSelf: 'flex-start', width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.finText}>FINANCIAL</Text>
              <Text style={{ color: mainAppColor, fontSize: 40}}>70</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -20}}>
              <Text style={styles.finText}>DEATH</Text>
              <Text style={{ color: mainAppColor, fontSize: 40}}>YEARS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default DashboardView;
