import React from "react";
import styled from 'styled-components'

//!! usefull for mum!!

function BookDesplayItem(book){
    const Item = styled.div`
        text-align: center;
        margin-top: 5px
        margin-bottom: 5px
        margin-left:auto;
        margin-right:auto;
        padding: 10px 5px;
        flex: 0 0 25%
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
        vertical-align: middle`

    const Cover = styled.img`    
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        height: 220px;`

    const StringContainer = styled.div`
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-width: 1px
        border-color:#939393
        border-radius: 2px;
        width:90%
        height: 100px`
        

    return(
        <Item>
            <ItemPadding>
                <ImageBox>
                    <Cover src={book.book.covers} alt="Image Failed"/>
                </ImageBox>
                <StringContainer>   
                    <h5>{book.book.title}</h5>
                    <h6>Written by: {book.book.authors}</h6>
                </StringContainer>
            </ItemPadding> 
        </Item>
)}

export default BookDesplayItem;