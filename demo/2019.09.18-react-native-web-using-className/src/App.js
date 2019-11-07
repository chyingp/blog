import React from 'react';
import logo from './logo.svg';
import './App.css';
import {View, Text, StyleSheet} from 'react-native';
import styles from './App.css';

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

// const styles = StyleSheet.create({
//   heading: {
//     color: 'red',
//     fontSize: '2rem'
//   },
//   myText: {
//     color: 'red',
//     marginTop: '1rem',
//     // margin: 10
//   }
// });

function App() {
  return (
    <View className={styles.heading}>
      {/* <Text className={styles.text}>hello world</Text> */}
      <Text className={styles.myText}>hello</Text>
      <Text className={styles.myText}>world</Text>
    </View>
  );
}

export default App;
