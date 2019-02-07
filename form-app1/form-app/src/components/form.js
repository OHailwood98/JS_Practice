import React, { Component } from 'react';
import FormComp from "./formComp.js"

class form extends Component {
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
  return (
    <FormComp data={this.state} dataChange={this.dataChange} />
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

  formSubmit(){
        window.alert("hi");
  }
}

export default form;