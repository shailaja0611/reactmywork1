
import React from "react";

const Mango=()=>{
    return(
        <h2>Mangoes are sweet</h2>
    )
}
const Grapes=()=>{
    return(
        <h2>Grapes are good</h2>
    )
}

function Sample() {
    return(
        <div>Sample
            <Mango/>
            <Grapes/>
        </div>
    )
    
}

export default Sample