import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'

class NewProductForm extends React.Component{
    constructor(){
        super()
        this.state = {
            data:{
                name: "",
                description: "",
                price: 0,
                stock: 1,
                oneOff: true
            },
            loading: false,
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
    }

    onChange(event){
        const {name, value} = event.target
        
         this.setState({data: {...this.state.data, [name]: value}});
    }

    onCheckChange(){
        this.setState({data:{...this.state.data, oneOff: !this.state.data.oneOff}})
    }

    onChangeNumber = e => this.setState({
        ...this.state,
        data:{...this.state.data, [e.target.name]: parseFloat(e.target.value)}
    });
  
    onSubmit(){
        const errors = this.validate(this.state.data);
        this.setState({error:errors});
        if(Object.keys(errors).length ===0){
            const data = new FormData();
            data.append('file', this.state.image)
            data.append('filename', this.state.data.name )
            this.setState({loading:true})
            this.props
            .submit(this.state.data)
            .catch(err => {
                console.log("caught error")
                console.dir(err.response.data.errors.email.message)
                return (this.setState({error:err.response.data.errors.email, loading:false}))
            })
            .then(this.props.submitPic(data))
        }
    }

    validate(data){
        const errors = {};
        if(!data.name) errors.name = "No Input"
        if(!data.description) errors.description = "No Input"
        if(!data.price) errors.price = "No Input"
        if(!data.stock) errors.stock = "No Input"
        if(!data.stock>0) errors.stock = "Stock has to be more than 0"
        //if(!data.image) errors.image = "No image"
        return errors;
    }
    

    render(){
        const {data, error, loading} = this.state;
        return(
            <Form onSubmit={this.onSubmit} loading={loading}>
                {error.message && (
                    <Message negative>
                        <Message.Header>Failure: {error.message}</Message.Header>
                        <p>{error.global}</p>
                    </Message>
                )
                }
                <Form.Field error={!!error.name}>
                   <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" placeholder="product name" value={data.name} onChange={this.onChange} />
                    {error.name && <InlineError message={error.name}/>}
                    <br/> 
                </Form.Field>
                <Form.Field error={!!error.description}>
                   <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="description" value={data.description} onChange={this.onChange} />
                    {error.description && <InlineError message={error.description}/>}
                    <br/>
                </Form.Field>
                <Form.Field error={!!error.price}>
                   <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price"  value={data.price} onChange={this.onChangeNumber} />
                    {error.price && <InlineError message={error.price}/>}
                    <br/> 
                </Form.Field>
                <Form.Field error={!!error.stock}>
                   <label htmlFor="stock">Stock</label>
                    <input type="number" id="stock" name="stock" placeholder={1} value={data.stock} onChange={this.onChangeNumber} />
                    {error.stock && <InlineError message={error.stock}/>}
                    <br/> 
                </Form.Field>
                <Form.Field>
                   <label htmlFor="oneOff">One Off Product</label>
                    <input type="checkbox" id="oneOff" name="oneOff" checked={data.oneOff} onChange={this.onCheckChange} />
                    <br/> 
                </Form.Field>
                <br/> 
                <Button primary>Add Product</Button>
            </Form>
        )
    }
}

NewProductForm.propType = {
    submit: PropTypes.func.isRequired,
    submitPic: PropTypes.func.isRequired
}

export default NewProductForm