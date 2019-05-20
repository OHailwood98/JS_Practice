import React from "react";
import styled from 'styled-components'
import DisplayItem from './DisplayItem'

//!! usefull for mum!!

class DisplayItemContainer extends React.Component {

    render(){
        console.log(this.props);
        var items = this.props.products.products
        const ProductContainter = styled.div`
        width: 100%;
        display: flex;
        flex-basis: 100%;
        margin: auto;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-between;
        padding: 2px;`
        
        var prods = items.map(product => <DisplayItem product={product} selected={this.props.select()}/>)

        return(
            <div>
                <ProductContainter>
                    {prods}
                    <DisplayItem product={items[0]} selected={this.props.select}/>
                </ProductContainter>
            </div>
        )
    }
    Select = () =>{window.alert("hi")}
}
    
    


export default DisplayItemContainer;