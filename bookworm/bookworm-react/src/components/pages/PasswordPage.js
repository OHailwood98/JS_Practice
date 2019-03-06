import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import PasswordForm from '../forms/PasswordForm'
import {UpdatePassword} from '../../actions/auth'

class PasswordPage extends React.Component{

    render(){
        return(
            <div>
                <PasswordForm email={this.props.email} submit={this.submit} />
            </div>
        )
    }

    submit = data => this.props.UpdatePassword(data).then(() =>this.props.history.push("/dashboard"));
}

PasswordPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
    email: PropTypes.string.isRequired,
    UpdatePassword: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
      email: state.user.email
    };
  }

export default connect(mapStateToProps,{UpdatePassword})(PasswordPage);