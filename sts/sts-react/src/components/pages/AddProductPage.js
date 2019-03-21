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
          <NewProductForm submit={this.submit} submitPic={this.submitPic}/>
      </div>
    );
  }

  submit = data => api.product.addItem(data).then(() => this.props.history.push("/staffhome"));

  submitPic = data => api.product.addPicture(data);
}

AddProductPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect()(AddProductPage);