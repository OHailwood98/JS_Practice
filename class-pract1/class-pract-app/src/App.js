import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(){
      super()
      this.state = {
        LoggedIn: false
      };
    }
    render(){
      var output;
      if(this.state.LoggedIn){
          output = "in"
      }else{
        output = "out"
      }
      return(
        <div>
          <h2>You are currently logged {output}</h2>
        </div>
      );
    }
}


export default App;
