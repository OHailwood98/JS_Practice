import React from 'react'

class EditProductPage extends React.Component{

    constructor(props){
        super()
        this.state = {
            product: props.location.state.product
        }
    }

    render(){
        return(
            <div>
                <h2> hi</h2>
            </div>
        )
    }
}

export default EditProductPage