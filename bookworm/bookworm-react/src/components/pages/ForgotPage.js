import React from 'react';
import ResetForm from '../forms/ForgotForm'
import {ForgotPassword} from '../../actions/auth'
import PropType from 'prop-types';
import {connect} from 'react-redux';

class ResetPage extends React.Component{
    state = {
        sucesss: false
    }
    render(){
        return(
            <div>
            {this.state.sucesss ? 
                <div>
                    <h1 class="ui header">Your Password has been Reset</h1>
                    <h2 class="ui header">Please check your Emails</h2>
                </div> 
            :
                <div> <ResetForm reset={this.reset} /> </div>
            }
            </div>
        )
    }
    reset = email => this.props.ForgotPassword(email).then(() => this.setState({sucesss:true}));

}

ResetPage.propType = {
    history: PropType.shape({
        push: PropType.func.isRequired
    }).isRequired,
    ForgotPassword: PropType.func.isRequired
}

export default connect(null, {ForgotPassword})(ResetPage)