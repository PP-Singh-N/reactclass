import React from "react";
import {Route, Switch} from "react-router-dom";
import Homepage from "./Home";

const Rout =()=>{
    return(
        <>
            <Switch>
                <Route exact path="/" component={Homepage}/>
            </Switch>

        </>
    )
}

export default Rout; 