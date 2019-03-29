import React from 'react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'
import {Alert, Button, Form, Row, Col} from 'react-bootstrap'

class LoginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            data:{
                password:""
            },
            loading: "false",
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        const {name, value} = event.target
        
         this.setState({data: {...this.state.data, [name]: value}});
    }

    onSubmit(event){
        event.preventDefault();
        console.log("**event")
        this.setState({loading:"true"})
        this.props
        .submit(this.state.data)
        .catch(err => {
            console.dir(err)
            return (this.setState({error:err.response.data.errors, loading:"false"}));
        })    
    }

    render(){
        const {data, error, loading} = this.state;
        return(
            <div>
                <Form loading={loading} onSubmit={e => this.onSubmit(e)}>
                    <Form.Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            {error.global && (
                                <Alert variant="danger">
                                    <Alert.Heading>Something Failed! :(</Alert.Heading>
                                    <p>{error.global}</p>
                                </Alert>
                            )}
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id="password" name="password" placeholder="password" value={data.password} onChange={this.onChange} />
                                {error.password && <InlineError message={error.password}/>}
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Row>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Button variant="primary" size="lg" block onClick={e => this.onSubmit(e)}>Login</Button>
                        </Col>
                    </Row>
                </Form>
            </div>  
        )
    }
}

LoginForm.propType = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
    submit: PropTypes.func.isRequired
}

export default LoginForm