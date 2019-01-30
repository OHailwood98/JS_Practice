import React, { Component } from 'react';

class login extends Component{
    render(){
        console.log(this.props.loggedin);
        return(
            <div>
            {this.props.loggedin ?
                <div> 
                    <h2> You are logged in</h2> 
                    <button onClick={() => this.props.buttonClicked()}>Log Out</button>
                </div>
            : 
                <div>
                    <h2> You are logged out </h2>
                    <button onClick={() => this.props.buttonClicked()}>Log In</button>
                </div>}
            </div>
        )
    }
}

export default login;