import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";

var numeral = require('numeral');

//!! usefull for mum!!

const DisplayItem = ({ product, selected }) => {
    const Item = styled.div`
        text-align: center;
        margin-top: 5px
        margin-bottom: 5px
        margin-left:auto;
        margin-right:auto;
        padding: 10px 5px;
        flex: 0 0 23%
        display:block;
        vertical-align: middle`

    const ItemPadding = styled.div`
        display:block;
        vertical-align: middle
        border-style: solid;
        border-width: 1px
        border-color:#939393
        border-radius: 5px;
        padding: 10px 5px;`

    const ImageBox = styled.div`
        display:block;
        vertical-align: middle
        margin-bottom: 2%
        margin-top: 2%`

    const Cover = styled.img`    
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        height: 50%;`

    const StringContainer = styled.div`
        line-height:10%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-width: 1px
        border-color:#939393
        border-radius: 2px;
        width: 90%
        height: 100px
        margin-bottom: 4%`
       
    const description = product.desc.slice(0,45)+ "...";
    var price = numeral(product.price).format('£0,0.00')

    return(
        <Item onClick={selected(product.ID)}>
            <ItemPadding>
                <ImageBox>
                    <Cover src={product.image} alt="Image Failed"/>
                </ImageBox>
                <StringContainer>
                    <div>
                        <h5>{product.name.capitalize()}</h5>
                        <h6>Price: £{price}</h6>
                        <h6>{description}</h6>
                    </div>   
                </StringContainer>
            </ItemPadding> 
        </Item>
)}

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};


export default DisplayItem;