import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import gravatarURL from 'gravatar-url'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {logout} from '../../actions/auth';

function TopNavBar({user, logout}){
    return(
        <Menu secondary pointing>
            <br/>
            <Menu.Item as={Link} to="/">Home</Menu.Item>
            {!!user.email && <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>}
            {!!user.email && <Menu.Item as={Link} to="/books/new">Book Search</Menu.Item>}
            <Menu.Menu position="right">
            {!!user.email ? 
                <Dropdown trigger={<Image avatar src={gravatarURL(user.email)}/>}>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/passwordupdate">Reset Password</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            :
                <Dropdown trigger={<Image avatar src={gravatarURL("test@email.com")}/>}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/signup">Sign Up!</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
            </Menu.Menu>
        </Menu>
    )
}

TopNavBar.propTypes = {
    user: PropTypes.shape({
        email:PropTypes.string.isRequired
    }).isRequired
}

function MapStateToProps(state){
    return{
        user:state.user
    };
}

export default connect(MapStateToProps, {logout})(TopNavBar);

//export default TopNavBar;