import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/Homepage'
import Stafflogin from './components/pages/LoginPage'
import Addproduct from './components/pages/AddProductPage'
import DashboardPage from './components/pages/DashboardPage'
import EditProductListPage from './components/pages/EditProductListPage'
import EditProductPage from './components/pages/EditProductPage'

import UserRoute from './components/routes/UserRoute'

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/stafflogin" exact component={Stafflogin}/>
          <UserRoute path="/staffhome" exact component={DashboardPage}/>
          <UserRoute path="/addproduct" exact component={Addproduct}/>
          <UserRoute path="/editproduct" exact component={EditProductListPage}/>
          <UserRoute path="/editproductpage" exact component={EditProductPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
