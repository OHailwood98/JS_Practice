import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'

class LoginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            data:{
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
        this.setState({loading:true})
        this.props
        .submit(this.state.data)
        .catch(err => {
            console.dir(err)
            return (this.setState({error:err.response.data.errors, loading:false}));
        })    
    }

    render(){
        const {data, error, loading} = this.state;
        return(
            <div>
                <Form onSubmit={this.onSubmit} loading={loading}>
                    {error.global && (
                        <Message negative>
                            <Message.Header>Something Failed! :(</Message.Header>
                            <p>{error.global}</p>
                        </Message>
                    )}
                    <Form.Field error={!!error.password}>
                    <label htmlFor="email">Password</label>
                        <input type="password" id="password" name="password" placeholder="password" value={data.password} onChange={this.onChange} />
                        {error.password && <InlineError message={error.password}/>}
                        <br/>
                        <br/> 
                    </Form.Field>
                    
                    <Button primary>Login</Button>
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