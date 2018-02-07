import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
});

// class Header extends React.Component {
//   render () {
//     return (
//       <ThemeContext.Consumer>
//         {themeContext => (
//           <h1 style={{background: themeContext.background, color: themeContext.color}}>
//             Hello React Context API
//           </h1>
//         )}
//       </ThemeContext.Consumer>
//     );
//   }
// }

class Header extends React.Component {
  render () {
    return (
      <Title>Hello React Context API</Title>
    );
  }
}

class Title extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {context => (
          <h1 style={{background: context.background, color: context.color}}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}

class App extends React.Component {

  render () {
    return (
      <ThemeContext.Provider value={{background: 'green', color: 'white'}}>
        <Header />
       </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('container')
);