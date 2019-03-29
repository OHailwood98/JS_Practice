import React from 'react'
//import {Button, Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button, Form, Row, Col} from 'react-bootstrap'

class EditProductItem extends React.Component{

    constructor(product){
        super()
        this.state = product
        this.edit = this.edit.bind(this)
        this.reduce = this.reduce.bind(this)
    }

    render(){
        var {product} = this.state

        /** return(
            <div class="ui grid">
                <div class ="row">
                    <div class="eight wide column">
                        <h2>{product.name}</h2> 
                    </div>
                    <div class="eight wide column">
                        <Div>
                            <Grid centered columns={2} stackable>
                                <Grid.Row centered> 
                                    <Grid.Column>
                                        <Button fluid onClick={this.reduce}>Reduce Stock</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button fluid onClick={this.edit}>Edit Product</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Div>    
                    </div>
                </div>
            </div>
        )*/

        return(
            <div>
                <Row>
                    <Col md={{ span: 8}}>
                        <div>
                            <h2>{product.name}</h2>
                        </div>
                        
                    </Col>
                    <Col md={{ span: 2}}>
                        <div>
                            <Button variant="primary" block onClick={this.reduce}>Reduce Stock</Button>
                        </div>
                        
                    </Col>
                    <Col md={{ span: 2}}>
                        <div>
                            <Button variant="primary" block onClick={this.edit}>Edit Product</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    edit(){
        this.props.edit(this.state.product);
    }

    reduce(){
        this.props.reduce(this.state.product);
    }
    
}

EditProductItem.propType = {
    edit: PropTypes.func.isRequired,
    reduce: PropTypes.func.isRequired
}

export default EditProductItem

