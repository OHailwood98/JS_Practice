import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import SignupPage from './components/pages/SignupPage'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'
import ConfirmPage from './components/pages/ConfirmPage'


function App(){
    return (
      <div className="ui container">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/confirmation/:token" exact component={ConfirmPage}/>
        <GuestRoute path="/login" exact component={LoginPage}/>
        <GuestRoute path="/signup" exact component={SignupPage}/>
        <UserRoute path="/dashboard" exact component={DashboardPage}/>
      </Switch>
      </div>
    );
}

export default App;
