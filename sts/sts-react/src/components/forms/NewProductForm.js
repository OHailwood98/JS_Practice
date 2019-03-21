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
                price: "",
                stock: 1,
                filepath: ""
            },
            file: null,
            loading: false,
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPicSelected = this.onPicSelected.bind(this);
    }

    onChange(event){
        const {name, value} = event.target
        
         this.setState({data: {...this.state.data, [name]: value}});
    }

    onChangeNumber = e => this.setState({
        ...this.state,
        data:{...this.state.data, [e.target.name]: parseFloat(e.target.value)}
    });

    onPicSelected(event){
        this.setState({file: event.target.files[0], data: {...this.state.data, filepath:event.target.files[0].name}})
        console.log(event.target.files[0])
    }
  
    onSubmit(){
        const errors = this.validate(this.state);
        this.setState({error:errors});
        if(Object.keys(errors).length ===0){
            const data = new FormData();
            data.append('image', this.state.file)
            this.setState({loading:true})
            this.props
            .submit(this.state.data)
            .catch(err => {
                console.log("caught error")
                console.dir(err.response.data.errors)
                return (this.setState({error:err.response.data.errors, loading:false}))
            })
            this.props.submitPic(data)
        }
    }

    validate(state){
        const errors = {};
        if(!state.data.name) errors.name = "No Input"
        if(!state.data.description) errors.description = "No Input"
        if(!state.data.price) errors.price = "No Input"
        if(!state.data.stock) errors.stock = "No Input"
        if(!state.data.stock>0) errors.stock = "Stock has to be more than 0"
        if(!state.file) errors.file = "No image"
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
                    <input type="text" id="price" name="price" placeholder="£ price" value={data.price} onChange={this.onChange} />
                    {error.price && <InlineError message={error.price}/>}
                    <br/> 
                </Form.Field>
                <Form.Field error={!!error.stock}>
                   <label htmlFor="stock">Stock</label>
                    <input type="number" id="stock" name="stock" placeholder={1} value={data.stock} onChange={this.onChangeNumber} />
                    {error.stock && <InlineError message={error.stock}/>}
                    <br/> 
                </Form.Field>
                <Form.Field error={!!error.file}>
                   <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" onChange={this.onPicSelected} />
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