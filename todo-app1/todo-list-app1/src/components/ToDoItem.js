import React from 'react';

class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.state = props.content;
    }
    
    render(){
        const styler = {
            textDecoration: "line-through",
            color: "#a8a8a8"
        }
       return(
        <div className="item">
            <input type="checkbox" checked={this.state.completed} onChange={() => this.props.changed(this.state.id)}/>
            <p style={ this.state.completed ? styler : null}>{this.state.text}</p>
        </div>
    )}
}

export default ToDoItem