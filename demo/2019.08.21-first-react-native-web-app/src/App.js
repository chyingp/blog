import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		color: 'red'
	}
});

// const styles = StyleSheet.create({
// 	title: {
// 		marginLeft: '10px',
// 		margin: '20px'
// 	}
// });

class App extends Component {
  render() {
    return (
        <View>
          <Text style={styles.title}>同构脚手架例子</Text>
          <Text>演示：className冗余问题</Text>
        </View>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Text } from 'react-native';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />        
//         <p>
//           Edit <code>src/App.js</code> and save to reload. 
//         </p>
//         <p>hello world</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
