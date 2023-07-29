import React, { useState } from "react";

const Parent =()=>{

    let[option ,setOption] = useState("") ;

   

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            
            <div className="child">
                <h2>Child Component 1</h2>
                <button onClick={()=>setOption("Option 1")}>Option 1</button>
            </div>
            <div className="child2">
                <h2>Child Component 2</h2>
                <button onClick={()=>setOption("Option 2")}>Option 2</button>
            </div>
            Selected Option: {option}
        </div>
    )
}

export default Parent ;