import React from 'react'
//import {Form, Button, Message} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'
import {Alert, Button, Form} from 'react-bootstrap'

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
        data:{...this.state.data, [e.target.name]: parseInt(e.target.value)}
    });

    onPicSelected(event){
        this.setState({file: event.target.files[0], data: {...this.state.data, filepath:event.target.files[0].name}})
        console.log(event.target.files[0])
    }
  
    onSubmit(event){
        event.preventDefault();
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
            <Form onSubmit={e => this.onSubmit(e)} loading={loading}>
                {error.message && (
                    <Alert variant="danger">
                        <Alert.Heading>Something Failed! :(</Alert.Heading>
                        <p>{error.global}</p>
                    </Alert>
                )
                }
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="name" name="name" placeholder="product name" value={data.name} onChange={this.onChange} />
                    {error.password && <InlineError message={error.name}/>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" id="description" name="description" placeholder="description" value={data.description} onChange={this.onChange} />
                    {error.password && <InlineError message={error.description}/>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" id="price" name="price" placeholder="£ price" value={data.price} onChange={this.onChange} />
                    {error.password && <InlineError message={error.price}/>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" id="stock" name="stock" placeholder={1} value={data.stock} onChange={this.onChangeNumber} />
                    {error.password && <InlineError message={error.stock}/>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" id="image" name="image" onChange={this.onPicSelected} />
                </Form.Group>
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