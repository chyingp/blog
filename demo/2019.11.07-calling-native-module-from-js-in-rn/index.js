import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, } from 'react-native';

import {NativeModules} from 'react-native';

class RNTest extends React.Component {
  componentDidMount() {
    var CalendarManager = NativeModules.CalendarManager;
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello 我是程序猿小卡.</Text>
        <Image        
          style={styles.avatar}
          source={{uri: 'https://avatars3.githubusercontent.com/u/2383346?s=460&v=4'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333'
  },
  avatar: {
    width: 300,
    height: 300,
    marginTop: 20
  }
});

// Module name
AppRegistry.registerComponent('RNTest', () => RNTest);