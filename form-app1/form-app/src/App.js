import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      sirname: "",
      age:"",
      gender:"",
      destination: "",
      vegi: false,
      vegan: false,
      nuts: false 
    }
    this.dataChange = this.dataChange.bind(this)
  }

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
    <div>
      <form onSubmit={this.submitData}>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="first name" onChange={this.dataChange} />
        <br/>
        <br/>
        <input type="text" name="sirname" value={this.state.sirame} placeholder="sirname" onChange={this.dataChange} />
        <br />
        <br/>
        <input type="number" name="age" value={this.state.age} placeholder="age" onChange={this.dataChange} />
        <br/>
        <br/>
        <label> Male <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.dataChange} /> </label>
        <br/>
        <label>Female <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.dataChange} /> </label>
        <br/>
        <br/>
        <label>Choose a Destination  :
          <select value={this.state.destination} name="destination" onChange={this.dataChange}>
            <option>London</option>
            <option>Madrid</option>
            <option>Paris</option>
            <option>Berlin</option>
            <option>Amsterdam</option>
          </select> 
        </label>
        <br/>
        <br/>
        <label>Do you have any dietary requirements?</label>
        <br/>
        <label> Vegeterian :
            <input type="checkbox" name="vegi" checked={this.state.vegi} onChange={this.dataChange}/>
        </label>
        <label> Vegan :
            <input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.dataChange}/>
        </label>
        <label> Nuts :
            <input type="checkbox" name="nuts" checked={this.state.nuts} onChange={this.dataChange}/>
        </label>
      </form>
      <p>name: {this.state.firstName} {this.state.sirname} age: {this.state.age} gender: {this.state.gender} destination: {this.state.destination} </p>
    </div>
  );
  }

  dataChange(event){
    const {name, value, type, checked} = event.target
     if(type==="checkbox"){
      this.setState({
        [name]: checked
      })
    }else{
      this.setState({
        [name]: value
      })
    } 
  }
}

export default App;