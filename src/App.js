import React, { Component } from 'react';
import TreeNode from './TreeNode';
import Items from './treeData';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <section className="App-intro">
          <TreeNode node={Items} defaultCollapsed={false} />
        </section>
      </div>
    );
  }
}

export default App;
