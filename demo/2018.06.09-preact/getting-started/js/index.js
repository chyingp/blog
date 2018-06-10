import { h, render, Component } from 'preact';

class App extends Component {
  render () {
    return (
      <div>hello</div>
    );
  }
}

render((
  <App />
), document.body);