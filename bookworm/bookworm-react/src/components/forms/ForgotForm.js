import React from 'react'
import {Form, Button, Message, Header} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types';
import Validator from 'validator'

class ResetForm extends React.Component{
    constructor(){
        super()
        this.state = {
            email:"",
            loading: false,
            error:{}
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    validate(email){
        const errors = {};
        if(!Validator.isEmail(email)) errors.email = "Invalid Email"
        return errors;
    }

    onChange(event){
        const {name, value} = event.target
        
         this.setState({[name]: value});
    }

    onSubmit(){
        const errors = this.validate(this.state.email);
        this.setState({error:errors});
        if(Object.keys(errors).length ===0){
            this.props.reset(this.state.email)
            .catch(err => {
                console.dir(err)
                return (this.setState({error:err.response.data.errors}));
            })
        }
    }
    render(){
        var {loading, email, error} = this.state;

        return(
        <div>
            <Form onSubmit={this.onSubmit} loading={loading}>
                {error.global && (
                    <Message negative>
                        <Message.Header>Something Failed! :(</Message.Header>
                        <p>{error.global}</p>
                    </Message>
                )}
                <Header as='h2'>Reset Your Password</Header>
                <Form.Field error={!!error.email}>
                <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="address@example.com" value={email} onChange={this.onChange} />
                    {error.email && <InlineError message={error.email}/>}
                    <br/> 
                </Form.Field>
                <br/> 
                <Button primary>Reset Password</Button>
            </Form>
        </div>)
    }
}

ResetForm.propType = {
    reset:PropTypes.func.isRequired
}

export default ResetForm
