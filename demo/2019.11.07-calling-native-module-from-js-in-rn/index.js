import React from 'react';
import {
  AppRegistry, 
  StyleSheet,
  Text,
  View,
  Image,
  NativeEventEmitter
} from 'react-native';

import {NativeModules} from 'react-native';

const TodoList = NativeModules.TodoList;
const todoListEmitter = new NativeEventEmitter(TodoList);


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