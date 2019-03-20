// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div>
        <Content
          href="http://google.com"
          text="Click load data"
        />

      </div>
    );
  }
}

export default App;
