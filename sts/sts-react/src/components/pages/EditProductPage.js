import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import api from '../../api'
import EditProductForm from '../forms/EditProductForm'

class EditProductPage extends React.Component{

    constructor(props){
        super()
        this.state = {
            id: props.location.state.product._id
        }
    }

    render(){
        return(
            <div>
                <h2> Edit the Product Here</h2>
                <EditProductForm id={this.state.id} submit={this.submit} getProductById={this.getProductById} back={this.back} />
            </div>
        )
    }

    submit = (data) => api.product.editProduct(data)

    back = () => this.props.history.push("/staffhome")

    getProductById = (id) =>api.product.getProductById(id)
}

EditProductPage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };
  
  export default connect()(EditProductPage);