// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';

const App = () => <Button>hello wechat</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));