import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import gravatarURL from 'gravatar-url'
import PropTypes from "prop-types";
import { connect } from "react-redux";

function TopNavBar({user}){
    return(
        <Menu secondary pointing>
            <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
            <Menu.Menu position="right">
                <Dropdown trigger={<Image avatar src={gravatarURL(user.email)}/>}>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown>
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
        user:{email:state.user.email}
    };
}

export default connect(MapStateToProps, {})(TopNavBar);

//export default TopNavBar;