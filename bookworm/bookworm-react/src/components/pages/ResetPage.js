import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import ResetForm from '../forms/ResetForm';
import {ResetPassword, ValidateResetToken} from '../../actions/auth'


class ResetPasswordPage extends React.Component{
    state = {
            ResetToken: this.props.match.params.token,
            PasswordReset: false,
            loading:true,
            error:{}
        }

    componentDidMount(){
        this.props.ValidateResetToken(this.state.ResetToken)
            .then(() => this.setState({loading:false, PasswordReset:true}))
            .catch(err => {
                console.dir(err)
                return (this.setState({error:err.response.data.errors, loading:false}));
            })
    
    }

    render(){
        var {loading, PasswordReset, error, ResetToken} = this.state;
        return (
            <div>
                {error.global && (
                        <Message negative>
                            <Message.Header>Something Failed! :(</Message.Header>
                            <p>{error.global}</p>
                        </Message>
                )}
                {loading && <Message>loading</Message>}
                {!loading && PasswordReset && <ResetForm submit={this.submit} reset={ResetToken}/>}
                {!loading && !PasswordReset && <Message>invalid token</Message>}
            </div>
        )}

    submit = data => this.props.ResetPassword(data).then(() => this.props.history.push("/forgotpassword"));
}

ResetPasswordPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
    match: PropTypes.shape({
        params:PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    //validateToken: PropTypes.func.isRequired,
    ResetPassword: PropTypes.func.isRequired,
    ValidateResetToken: PropTypes.func.isRequired
}

export default connect(null, {ResetPassword, ValidateResetToken})(ResetPasswordPage)