import React from "react";
import styled from 'styled-components'
import DisplayItem from './DisplayItem'
import {Carousel} from 'react-bootstrap'

//!! usefull for mum!!

function DisplayItemCaro(products){
    var items = products.products.products
    const Containter = styled.div`
    width: 60%;`
       
    var prods = items.map(product => <Carousel.Item><DisplayItem product={product}/></Carousel.Item>)

    return(
        <Containter>
            <Carousel>
                {prods}
            </Carousel>
        </Containter>
)}

export default DisplayItemCaro;