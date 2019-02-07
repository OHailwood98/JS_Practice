import React, { Component } from 'react';
import './App.css';
import Form from "./components/form"

class App extends Component {

  render() {
    /**return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="first name" onChange={this.dataChange} />
        <br/>
        <input type="text" name="sirname" value={this.state.sirame} placeholder="sirname" onChange={this.dataChange} />
        <br />
        <textarea name = "description" value={this.state.description} onChange={this.dataChange} />
        <br/>
        <label>do you like cheese?
            <input type="checkbox" name="likeCheese" checked={this.state.likeCheese} onChange={this.dataChange}/>
        </label>
        <br/>
        <label> Male <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.dataChange} /> </label>
        <br/>
        <label>Female <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.dataChange} /> </label>
        <br/>
        <select value={this.state.colourPref} name="colourPref" onChange={this.dataChange}>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Yellow</option>
          <option>Purple</option>
        </select>      
      </form>
    ); */
  return (
      <Form />
  );
  }
}

export default App;