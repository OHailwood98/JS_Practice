import React from 'react';

function Product(props){
    var stars = props.content.stars;
    var starOutput = "";
    for(var i=0; i<stars; i++){
        starOutput +="* "
    }

    return(
        <div>
            <h2>{props.content.name}</h2>
            <p>{props.content.description}</p>
            <h3>Price: £{props.content.price}</h3>
            <h3>Star Rating:{starOutput}</h3>
        </div>
    );
}

export default Product;