import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { Grid, Form, Button, Segment} from "semantic-ui-react";
import styled from 'styled-components'
import {Button, Row, Col} from 'react-bootstrap'


class DashboardPage extends React.Component {
  render(){

    var Heading = styled.h1`
    text-align: center
    `
    return(
      <div>
        <Row centered={"true"}>
          <Col>
            <h1>Product Management Center</h1>
            <br/>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" size="lg" block onClick={()=> this.props.history.push("/addproduct")}>Add Product</Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg" block onClick={()=> this.props.history.push("/editproduct")} fluid>Edit Product</Button>
          </Col>
        </Row>
      </div>
    )

    /** return (
      <div>
          <Form>
          <Grid columns={2} fluid="true" stackable>
            <Grid.Row centered={true}>
              <Grid.Column>
                <Heading>Product Management Center</Heading>
                <br/>
                <br/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button size="huge" onClick={()=> this.props.history.push("/addproduct")} fluid>Add Product</Button>
              </Grid.Column>
              <Grid.Column>
                <Button size="huge" onClick={()=> this.props.history.push("/editproduct")} fluid>Edit Product</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Form>
      </div>
    );*/

  }

  /** 
        <Form>
          <Grid columns={2} fluid="true" stackable>
            <Grid.Row>
              <Grid.colum>
                
              </Grid.colum>
            </Grid.Row>
          </Grid>
        </Form>
*/
}

 DashboardPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect()(DashboardPage);