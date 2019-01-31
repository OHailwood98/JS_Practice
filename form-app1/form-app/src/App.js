import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      sirname: ""
    }
    this.dataChange = this.dataChange.bind(this)
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="first name" onChange={this.dataChange} />
        <br/>
        <input type="text" name="sirname" value={this.state.sirame} placeholder="sirname" onChange={this.dataChange} />
      </form>
    );
  }

  dataChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
}

export default App;
