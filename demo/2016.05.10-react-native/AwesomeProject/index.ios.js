/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,  // 图片组件
  AlertIOS  // 弹窗组件
} from 'react-native';

import {
  TouchableHighlight
} from 'react-native';

class AwesomeProject extends Component {

  buttonClicked() {
    var alertMessage = '按钮被点击';
    return AlertIOS.alert(
      '我是标题君',
      alertMessage
    )
  }
  
  render() {
    
    var imgUrl = 'https://avatars2.githubusercontent.com/u/2383346?v=3&s=460';
    var imgStyle = {width: 460, height: 460};
    
    return (
      <View style={styles.container}>  
        <Image source={{uri: imgUrl}} style={imgStyle} />              
        <TouchableHighlight onPress={this.buttonClicked}>
          <View>
            <Text>点击我!</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
