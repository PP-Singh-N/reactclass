import React from "react";
import docdog from "./Image/Banner2.jpg"

const Priyank=()=>{
    return(
        <>
            <div class="container-fluid containerdoc">
                <div class="row datas">
                    
                    <div class="col-md-7 colpri">
                        <h1 class="h1priyank"> Dr.Priyank Vyas</h1>
                        <hr class="hori" />
                            <p class="ppriyankcss">Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow type and scras </p>
                    </div>

                            <div class="col-md-5">
                                <img src={docdog} class="docdogimg" /> 
                            </div>
                                    
                </div>
            </div>
        </>
    )
}

export default Priyank;