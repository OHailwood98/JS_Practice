import React from 'react';
import ToDoItem from "./components/ToDoItem";
import Header from "./components/Header";
import './App.css';
import ToDoList from "./data/ToDoList.json";

 class App extends React.Component {
   constructor(){
      super()
      this.state = {
        toDoList: ToDoList
      }
      this.changed = this.changed.bind(this);
    }

   render(){
     var items = this.state.toDoList.map(todo=> <ToDoItem key={todo.id} content={todo} changed={this.changed}/>)
      return (
        <div>
          <Header />
          <div className="todo-list">
            {items}
          </div>
        </div>
      );
   }

   changed(id){
    this.setState(prevState => {
      const updated = prevState.toDoList.map(todoItem =>{
        if(todoItem.id===id){
          todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      })
      return {toDoList: updated};
    })
   }
}

export default App;