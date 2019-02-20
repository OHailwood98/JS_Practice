import React from 'react';
import {connect} from 'react-redux'
import PropType from 'prop-types'
import {logout} from '../../actions/auth'



function Homepage({isAuthed, logout, history}){
    return (
      <div>
        <header>
          <p>my homepage header</p>
          {isAuthed ? 
            <button onClick={() => logout()}>Logout</button> : 
            <div>
              <button onClick={() => history.push("/login")}>Login</button>
              <button onClick={() => history.push("/signup")}>New User? Signup Here!</button>
            </div>}
        </header>
      </div>
    );
}

Homepage.propTypes = {
  history: PropType.shape({
    push: PropType.func.isRequired
  }).isRequired,
  isAuthed : PropType.bool.isRequired,
  logout : PropType.func.isRequired
}

function mapStateToProps(state){
  return{
    isAuthed: !!state.user.token
  }
}

export default connect(mapStateToProps, {logout})(Homepage);