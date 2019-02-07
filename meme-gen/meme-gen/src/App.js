import React, { Component } from 'react';
import './App.css';
import MemeGen from "./components/MemeGen"
import Header from "./components/header"

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <MemeGen />
      </div>
    );
  }
}

export default App;
