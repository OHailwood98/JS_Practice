import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

function newBookCtA(){
    //for mums site
    return(
        <Card centered>            
            <Card.Content textAlign="center">
                <Card.Header>Add a New Book</Card.Header>
                <Link to="/books/new"><Icon name="plus circle" size="massive"/></Link>
            </Card.Content>
        </Card>
    )
}

export default newBookCtA