import React from 'react';
import SignUpForm from '../forms/SignupForm';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {signup} from '../../actions/auth'


class SignupPage extends React.Component{

    render(){
        return (
        <div>
            <header>
            <h2>Sign Up Here</h2>
            </header>
            <SignUpForm submit={this.submit}/>
        </div>
        ); 
    }
    submit = data => this.props.signup(data).then(() => this.props.history.push("/dashboard"));
}

SignupPage.propType = {
    history: PropType.shape({
        push: PropType.func.isRequired
    }).isRequired,
    signup: PropType.func.isRequired
}

export default connect(null, {signup})(SignupPage);