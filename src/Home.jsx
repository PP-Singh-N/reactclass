import React from "react";
import Navtop from "./Navbarr";
import Carousbanner from "./Carousal";
import Aboutus from "./About";
import Priyank from "./Doctor";
import Workandexperience from "./Achivements";
import Cliniclocation from "./Locationmap";
import Bottomfoot from "./Footer";
import Callbutton from "./Call";
import Numbergame from "./game";
import Timetest from "./Time";



const Homepage =()=>{
    return(
        <>
            <Navtop/>
            <Carousbanner/>
            <Aboutus/>
            <Priyank/>
            <Workandexperience/>
            <Cliniclocation/>
            <Bottomfoot/>
            <Callbutton/>
            {/* <Numbergame/>
            <Timetest/> */}
        </>
    )
}

export default Homepage;