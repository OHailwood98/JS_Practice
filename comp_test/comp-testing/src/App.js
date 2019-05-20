import React from 'react';
import './App.css';
import products from './Products.json'
import ItemContainer from './components/DisplayItemContainer'
import ItemCaro from './components/DisplayItemCaro'

class App extends React.Component {
  render(){
    return (
      <div className="ui container">
        <ItemContainer products={products} select={this.selected}/>
        <br/>
        
      </div>
    );
  }

  selected = (ID) => { console.dir(ID)};


}

//<ItemCaro products={products}/>

export default App;
