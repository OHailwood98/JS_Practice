import React from 'react';

function Joke(props){
    var setup = props.content.setup;
    var punchline = props.content.punchline;
    console.log(setup);
    if(setup==null){
        return(
            <div>
                <h2>{punchline}</h2>
            </div>
        ) 
    }

    return(
        <div>
            <h2>{setup}</h2>
            <h3>{punchline}</h3>
        </div>
    )
    
}

export default Joke