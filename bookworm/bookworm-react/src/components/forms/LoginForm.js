import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'

class LoginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            data:{
                email:"",
                password:""
            },
            loading: false,
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        const {name, value} = event.target
        
         this.setState({data: {...this.state.data, [name]: value}});
    }

    onSubmit(){
        const errors = this.validate(this.state.data);
        this.setState({error:errors});
        if(Object.keys(errors).length ===0){
            this.setState({loading:true})
            this.props
            .submit(this.state.data)
            .catch(err => this.setState({error:err.response.data.errors, loading:false}))
            .catch(data => {if(data.response.success){
                window.alert("Login Successful!")
            }})
        }
    }

    validate(data){
        const errors = {};
        if(!data.password) errors.password = "No Input"
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email"
        return errors;
    }
    

    render(){
        const {data, error, loading} = this.state;
        return(
            <Form onSubmit={this.onSubmit} loading={loading}>
                {error.global && (
                    <Message negative>
                        <Message.Header>Something Failed! :(</Message.Header>
                        <p>{error.global}</p>
                    </Message>
                )
                }
                <Form.Field error={!!error.email}>
                   <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="address@example.com" value={data.email} onChange={this.onChange} />
                    {error.email && <InlineError message={error.email}/>}
                    <br/> 
                </Form.Field>
                <Form.Field error={!!error.password}>
                   <label htmlFor="email">Password</label>
                    <input type="password" id="password" name="password" placeholder="password" value={data.password} onChange={this.onChange} />
                    {error.password && <InlineError message={error.password}/>}
                    <br/>
                    <br/> 
                </Form.Field>
                
                <Button primary>Login</Button>
            </Form>
        )
    }
}

LoginForm.propType = {
    submit: PropTypes.func.isRequired
}

export default LoginForm