import React, { Component } from 'react';
import './App.css';

function wasClicked(){
  window.alert("OW!");
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    setTimeout(() => 
    {
      this.setState({loading:false})
    }, 2000)
  }

  render() {
    return (
      <div>
        <h1>HI</h1>
        <br/>
        {this.state.loading ? <h2>loading...</h2> : <img src={require('./images/beingadeveloper.jpg')} alt="hi" onMouseOver={this.rolledOver}/>}
        <br/>
        <button onClick={wasClicked}>Click Me</button>
      </div>
    );
  }

  rolledOver(){
    window.alert("NO touchy!");
  }
}



export default App;
