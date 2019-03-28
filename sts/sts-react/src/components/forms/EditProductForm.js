import React from 'react'
import {Form, Button, Message, Grid, Image} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'

class EditProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:{
                id: props.id,
                name: "",
                description: "",
                price: "",
                stock: 1,
                imagepath: ""
            },
            loading: false,
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getProductById(this.state.data.id)
            .then(product =>{
                this.setState({data:{
                    ...this.state.data,
                    name: product.name,
                    description: product.desc,
                    price: product.price,
                    stock: product.stock,
                    imagepath: product.imagepath
                }})
            })
    }

    onChange(event){
        const {name, value} = event.target
        
         this.setState({data: {...this.state.data, [name]: value}});
    }

    onChangeNumber = e => this.setState({
        ...this.state,
        data:{...this.state.data, [e.target.name]: parseInt(e.target.value)}
    });
  
    onSubmit(){
        const errors = this.validate(this.state);
        this.setState({error:errors});
        if(Object.keys(errors).length ===0){
            this.props
            .submit(this.state.data)
            .catch(err => {
                console.log("caught error")
                console.dir(err.response.data.errors)
                return (this.setState({error:err.response.data.errors, loading:false}))
            })
        }
    }

    validate(state){
        const errors = {};
        if(!state.data.name) errors.name = "No Input"
        if(!state.data.description) errors.description = "No Input"
        if(!state.data.price) errors.price = "No Input"
        if(!state.data.stock) errors.stock = "No Input"
        if(!state.data.stock>0) errors.stock = "Stock has to be more than 0"
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
                <Form.Field error={!!error.stock}>
                   <label htmlFor="image">Image: {data.imagepath}</label>
                    <Image src={data.imagepath} id="image" size="small"/>
                    {error.stock && <InlineError message={error.stock}/>}
                    <br/> 
                </Form.Field>
                <br/>
                <Grid centered columns={2} stackable>
                <Grid.Row centered> 
                    <Grid.Column>
                        <Button fluid primary>Save Product</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={this.props.back} fluid>Return to Home</Button>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Form>
        )
    }
}

EditProductForm.propType = {
    submit: PropTypes.func.isRequired,
    getProductById: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired
}

export default EditProductForm