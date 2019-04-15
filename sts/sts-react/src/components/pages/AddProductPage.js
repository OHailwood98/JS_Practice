import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewProductForm from '../forms/NewProductForm'
import api from '../../api'


class AddProductPage extends React.Component {
  constructor(){
    super()
  }
  render() 
  {
    return (
      <div>
          <h2>Add Product</h2>
          <NewProductForm submit={this.submit}/>
      </div>
    );
  }

  submit = data => api.product.addPicture(data).then(() => this.props.history.push("/staffhome"));
}

AddProductPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect()(AddProductPage);