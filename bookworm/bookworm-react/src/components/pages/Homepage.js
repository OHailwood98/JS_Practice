import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'



function Homepage({isAuthed, logout}){
    return (
      <div>
        <header>
          <p>my homepage header</p>
          {isAuthed ? <button onClick={() => logout()}>logout</button> : <Link to="/login">Login</Link>}
        </header>
      </div>
    );
}

Homepage.propTypes = {
  isAuthed : PropTypes.bool.isRequired,
  logout : PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    isAuthed: !!state.user.token
  }
}

export default connect(mapStateToProps, {logout})(Homepage);