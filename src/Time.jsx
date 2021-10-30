import React, { useState } from "react";

const Timetest=()=>{
    
    let newtime= new Date().toLocaleTimeString();
    const [count, setTime]=useState(newtime);
    // current Data, Updated Data = Initial Value

    const Newclick=()=>{
        let newctime = new Date().toLocaleTimeString();
        setTime(newctime);
    }

    setInterval(Newclick, 1000);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={Newclick}> Get Time </button>
            

        </>
    )


}

export default Timetest;