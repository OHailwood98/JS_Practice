import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/Homepage'
import Stafflogin from './components/pages/LoginPage'
import Addproduct from './components/pages/AddProductPage'
import DashboardPage from './components/pages/DashboardPage'
import UserRoute from './components/routes/UserRoute'

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/stafflogin" exact component={Stafflogin}/>
          <UserRoute path="/staffhome" exact component={DashboardPage}/>
          <Route path="/addproduct" exact component={Addproduct}/>
        </Switch>
      </div>
    );
  }
}

export default App;
