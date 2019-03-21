import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../api'
import EditProductItem from '../forms/EditProductItem'


class EditProductListPage extends React.Component {
  constructor(){
    super()
    this.state = {
        products: null
    }
  }

  componentDidMount(){
    api.product.getProducts()
        .then(products =>{
            this.setState({products:products})
            console.dir(products)
        })
    
  }


  render() {
    
    var products = null;
    if(this.state.products){
        products = this.state.products.map(product => <EditProductItem product={product} edit={this.edit} reduce={this.reduce}/>)
    } 

    return (
      <div>
          <h2>Choose a product to Edit</h2>
          <div>
              {products}
          </div>
      </div>
    );
  }

  edit = (product) => {this.props.history.push({pathname: '/editproductpage', state: { product: product }})};

  reduce = (product) => {api.product.reduceStock(product).then(stock => window.alert("Stock is now: " + stock))}
}

EditProductListPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect()(EditProductListPage);