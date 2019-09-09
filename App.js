/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0.0,
      length: 0.0,
      sqFt: 0.0,
      avgThickness: 0.0,
      cf: 0.0,
      perch: 0.0,
      yards: 0.0,
      sands: 0.0,
      rock: 0.0,
      portland: 0.0,
    };
  }

  calculate = () => {
    if (this.state.height !== 0 || this.state.length !== 0) {
      let sqFt = this.state.length * this.state.height;
      let avgThickness = (this.state.height / 2 + 1.25) / 2;
      let cf = sqFt * avgThickness;
      let perch = cf / 25;
      let yards = cf / 27;
      let sands = perch * 0.5;
      let rock = perch * 1.5;
      let portland = perch * 2.5;

      this.setState({
        sqFt: sqFt,
        avgThickness: avgThickness,
        cf: cf,
        perch: perch,
        yards: yards,
        sands: sands,
        rock: rock,
        portland: portland,
      });
    }
  };

  reset = () => {
    this.setState({
      height: 0.0,
      length: 0.0,
      sqFt: 0.0,
      avgThickness: 0.0,
      cf: 0.0,
      perch: 0.0,
      yards: 0.0,
      sands: 0.0,
      rock: 0.0,
      portland: 0.0,
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Length</Text>
                <TextInput
                  keyboardType={'numeric'}
                  style={{
                    height: 40,
                    borderColor: '#f5f5f5',
                    borderBottomWidth: 1,
                  }}
                  placeholder="Enter Length (feet)"
                  onChangeText={text => this.setState({length: text})}
                  value={this.state.length}
                />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Height</Text>
                <TextInput
                  keyboardType={'numeric'}
                  style={{
                    height: 40,
                    borderColor: '#f5f5f5',
                    borderBottomWidth: 1,
                  }}
                  placeholder="Enter Height (feet)"
                  onChangeText={text => this.setState({height: text})}
                  value={this.state.height}
                />
              </View>

              <View style={styles.flexContainers}>
                <TouchableOpacity
                  onPress={() => this.calculate()}
                  style={{
                    backgroundColor: '#f3933d',
                    width: '47%',
                    padding: 15,
                    borderRadius: 8,
                  }}>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    Calculate
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.reset()}
                  style={{
                    backgroundColor: '#819760',
                    width: '47%',
                    padding: 15,
                    borderRadius: 8,
                  }}>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    Clear
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.flexContainersInitial}>
                <Text style={{fontWeight: 'bold'}}>Sq Ft</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.sqFt.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>Avg Thickness</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.avgThickness.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>CF</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.cf.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>Perch</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.perch.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>Yards</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.yards.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>Sand (Tons)</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.sands.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>Rock (Tons)</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.rock.toFixed(1)}
                </Text>
              </View>
              <View style={styles.flexContainersNonInitial}>
                <Text style={{fontWeight: 'bold'}}>Portland (Bags)</Text>

                <Text style={{fontWeight: 'bold'}}>
                  {this.state.portland.toFixed(1)}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  flexContainers: {
    width: '94%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  flexContainersInitial: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 50,
  },
  flexContainersNonInitial: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: 5,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
