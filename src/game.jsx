import React, { useState } from "react";

const Numbergame=()=>{
    const first= useState();
    const [count, setCount]=useState(0);
    // current Data, Updated Data = Initial Value

    const Incnum=()=>{
        setCount(count+1);
    }

    const Decnum=()=>{
        setCount(count-1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={Incnum}> Increase </button>
            <button onClick={Decnum} > Decrease </button>

        </>
    )


}

export default Numbergame;