import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'

class ResetForm extends React.Component{
    constructor(){
        super()
        this.state = {
            data:{
                token:"",
                passwordCon:"",
                password:""
            },
            loading: false,
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({data:{token: this.props.reset}});
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
            .submit({password:this.state.data.password, token: this.state.data.token})
            .catch(err => {
                console.dir(err)
                return (this.setState({error:err.response.data.errors, loading:false}));
            })
        }
    }

    validate(data){
        const errors = {};
        if(!data.password || !data.passwordCon) errors.password = "No Input"
        if(!(data.password===data.passwordCon)) errors.global = "Passwords Don't Match"
        return errors;
    }

    render(){
        const {data, error, loading} = this.state;
        return(
            <div>
                <Form onSubmit={this.onSubmit} loading={loading}>
                    <h2>Reset Your Password Here</h2>
                    <p>{data.token}</p>
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
                    <Form.Field error={!!error.password}>
                    <label htmlFor="email">Confirm Password</label>
                        <input type="password" id="passwordCon" name="passwordCon" placeholder="password" value={data.passwordCon} onChange={this.onChange} />
                        {error.passwordCon && <InlineError message={error.passwordCon}/>}
                        <br/>
                        <br/> 
                    </Form.Field>
                    
                    <Button primary>Reset Password</Button>
                </Form>
                <br/>
                <br/> 
            </div>  
        )
    }
}

ResetForm.propType = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
    submit: PropTypes.func.isRequired,
    reset:PropTypes.string.isRequired
}

export default ResetForm