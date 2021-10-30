import React from "react";
import Awardwin from "./Image/Awardwinning.jpg";
import Bestpet from "./Image/bestpet.jpg";
import Bestgraphic from "./Image/hotdeals.jpg"
import Awardwin2 from "./Image/Banner2.jpg"


const Workandexperience =()=>{
    return(
        <>

            

            <div className="container-fluid achivecontain">
            <h1 className="h1achive">Achivements and Work <br /> Experience</h1>
              
                <hr class="hrachive" />
                <br />
                <div className="row">

                    <div className="column">
                        <div className="row">

                            <div className="col-sm-1">
                            </div>

                            <div className="col-sm-2">
                                <img src={Awardwin} class="awardwinimg" />
                            </div>

                            <div className="col-sm-3 awardcolcss">

                                <h1 className="awardh1css">Award Winning session</h1>

                                <p className="pawardcss"> Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t </p>

                                <p> <a href="">Read More..</a> </p>

                            </div>

                            <div className="col-sm-2">
                                <img src={Bestpet} class="bestpetcss" />
                            </div>

                            <div className="col-sm-3 bestpetcolcss">

                                <h1 class="bestpeth1">Best Pet Doctor</h1>

                                <p class="pbestpetcss"> Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t </p>

                                <p> <a href="">Read More..</a> </p>

                                <div className="col-sm-1">
                                </div>
                            
                            </div>

                        </div>

                        <div className="row">

                        <div className="col-sm-1">
                            </div>

                            <div className="col-sm-2">
                                <img src={Bestgraphic} class="awardwinimg" />
                            </div>

                            <div className="col-sm-3 awardcolcss">

                                <h1 class="bestpeth1">Best Professor at Graphic Era</h1>

                                <p class="pbestpetcss"> Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t </p>

                                <p> <a href="">Read More..</a> </p>

                            </div>

                            <div className="col-sm-2">
                                <img src={Awardwin2} class="bestpetcss" />
                            </div>

                            <div className="col-sm-3 bestpetcolcss">

                                <h1 className="awardh1css">Award Winning session</h1>

                                <p className="pawardcss"> Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t </p>

                                <p> <a href="">Read More..</a> </p>

                                <div className="col-sm-1">
                                </div>
                            
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Workandexperience;