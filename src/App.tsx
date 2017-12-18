import * as React from 'react';
import { Button } from 'antd-mobile';
import './App.scss';

const logo = require('./logo.svg');

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h1>hello world!</h1>
          <Button type="primary">
            按钮
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
