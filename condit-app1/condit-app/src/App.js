import React, { Component } from 'react';
import './App.css';
import Login from './component/login';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedin: false
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  render() {
    return (
      <Login loggedin={this.state.loggedin} buttonClicked={this.buttonClicked} />
    );
  }

  buttonClicked(){
    this.setState(prevState => {
      return {loggedin: !prevState.loggedin};
    })
  }
}

export default App;