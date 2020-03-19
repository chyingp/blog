// import React from 'react';
import {
  AppRegistry, 
  StyleSheet,
  Text,
  View,
  Image,
  NativeEventEmitter
} from 'react-native';

import {NativeModules} from 'react-native';
import React from 'react';
import MapView from './MapView.js';

// import React, { useState, useEffect } from 'react';
// import { Animated } from 'react-native';

const TodoList = NativeModules.TodoList;
const todoListEmitter = new NativeEventEmitter(TodoList);

const FadeInView = (props) => {
  // const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  // React.useEffect(() => {
  //   Animated.timing(
  //     fadeAnim,
  //     {
  //       toValue: 1,
  //       duration: 10000,
  //     }
  //   ).start();
  // }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

class RNTest extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
    // 例子：调用原生模块导出的方法
    TodoList.create();
    TodoList.add('起床');

    // 例子：回调
    TodoList.addWithCallback('吃早餐', (error, list) => {
      if (error === null) {
        console.log(`[addWithCallback] list.length == ${list.length}`);
      }
    });

    // 例子：事件监听
    todoListEmitter.addListener('ItemAdded', list => {
      console.log(`[ItemAdded] list.length == ${list.length}`);
    });
    TodoList.addAndTriggerEvent('上班');

    // 例子：返回Promise实例
    const resolver = msg => console.log(`[addAndReturnPromise] [resolved], ${msg}`);
    const rejecter = error => console.log(`[addAndReturnPromise] [rejected] ${error.message}`);
        
    TodoList.addAndReturnPromise('加班', true).then(resolver).catch(rejecter);
    TodoList.addAndReturnPromise('休息', false).then(resolver).catch(rejecter);    
  }
  
  render() {
    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return (
      <MapView
        region={region}
        zoomEnabled={true}
        style={{ flex: 1 }}
      />
    );

    // return (
    //   <View style={styles.container}>
    //     {/* <Text style={styles.title}>Hello 我是程序猿小卡.</Text> */}
    //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //       <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
    //         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
    //       </FadeInView>
    //     </View>        
    //     {/* <Image        
    //       style={styles.avatar}
    //       source={{uri: 'https://avatars3.githubusercontent.com/u/2383346?s=460&v=4'}}
    //     /> */}
    //   </View>
    // );
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