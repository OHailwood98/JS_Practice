import React from 'react'
import {Button, Form, Header} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class EditProductItem extends React.Component{

    constructor(product){
        super()
        this.state = product
        this.edit = this.edit.bind(this)
        this.reduce = this.reduce.bind(this)
    }

    render(){
        var {product} = this.state

        return(
            <div class="ui grid">
                <div class="left floated column">
                    <Header as="h2">{product.name}</Header> 
                </div>
                <Button.Group floated='right'>
                    <div>
                        <Button onClick={this.reduce}>Reduce Stock</Button>
                    </div>
                    <div>
                        <Button onClick={this.edit}>Edit Product</Button>
                    </div>
                </Button.Group>
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

