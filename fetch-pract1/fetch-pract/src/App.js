import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      vehicle: {},
      loading: false
    }
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch("https://swapi.co/api/vehicles/4/")
      .then(Response => Response.json())
      .then(data => this.setState({vehicle: data}))
  }

  render() {
    return (
      <div>
        <h2>Name: {this.state.vehicle.name}</h2>
        <h2>Model: {this.state.vehicle.model}</h2>
      </div>
    );
  }
}

export default App;
