import React from 'react';
import {Link} from 'react-router-dom'


function Homepage(){
    return (
      <div>
        <header>
          <p>my homepage header</p>
          <Link to="/login">Login/signup</Link>
        </header>
      </div>
    );
}

export default Homepage;