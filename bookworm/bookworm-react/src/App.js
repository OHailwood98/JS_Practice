import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import SignupPage from './components/pages/SignupPage'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'
import ConfirmPage from './components/pages/ConfirmPage'
import ResetPage from './components/pages/ForgotPage'
import ResetPasswordPage from './components/pages/ResetPage'
import PasswordUpdatePage from './components/pages/PasswordPage'
import TopNavBar from './components/nav/TopNavBar'
import BookSearchPage from './components/pages/BookSearchPage'



function App(){
    return (
      <div className="ui container">
      <TopNavBar />
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/confirmation/:token" exact component={ConfirmPage}/>
        <Route path="/passwordreset/:token" exact component={ResetPasswordPage}/>
        <Route path="/forgotpassword" exact component={ResetPage}/>
        <Route path="/passwordupdate" exact component={PasswordUpdatePage}/>
        <Route path="/books/new" exact component={BookSearchPage}/>
        <GuestRoute path="/login" exact component={LoginPage}/>
        <GuestRoute path="/signup" exact component={SignupPage}/>
        <UserRoute path="/dashboard" exact component={DashboardPage}/>
      </Switch>
      </div>
    );
}

export default App;
