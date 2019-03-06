import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmail";
import {logout} from '../../actions/auth'


class DashboardPage extends React.Component {
  render() {
    const { isConfirmed} = this.props;
    return (
      <div>
        <header>
          <div>
            <button onClick={() =>this.password()}>Reset Your Password</button>
            <button onClick={() => this.props.logout()}>Logout</button>
          </div>
        </header>
        {!isConfirmed && <ConfirmEmailMessage />}

      </div>
    );
  }

  password() {this.props.history.push("/passwordupdate");}
}



DashboardPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps, {logout})(DashboardPage);