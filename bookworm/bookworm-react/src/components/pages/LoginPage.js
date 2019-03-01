import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/auth'


class LoginPage extends React.Component{

    render(){
        return (
        <div>
            <header>
            <p>my login header</p>
            </header>
            <LoginForm submit={this.submit} reset={this.reset}/>
        </div>
        ); 
    }
    submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));

    reset = () => this.props.history.push("/forgotpassword");
}

LoginPage.propType = {
    history: PropType.shape({
        push: PropType.func.isRequired
    }).isRequired,
    login: PropType.func.isRequired,
}

export default connect(null, {login})(LoginPage);