import React from "react";
import doglogo from "./Image/Footerlogo.png"
import {FaHome, FaPhone, FaEnvelope} from "react-icons/fa";

const Bottomfoot=()=>{
    return(
        <>
            <div className="container-fluid footercss">
                <div className="row">
                    <div className=" col-sm-1">
                    </div>

                    <div className=" col-sm-2">
                        <img className="doglogocss" src={doglogo} />
                    </div>

                    <div className=" col-sm-4 contactfooter">
                        <h1>Contact Detail</h1>
                        <p>Dr.Vyas Clinic</p>
                        <p> < FaHome /> Veer sawarkar marg opposite Sakti Medicos Subhash Nagar Dehradun, Uttarakhand 248001 India</p>
                        <p> <FaPhone/> Tel: +91-7014296174, +91-9634403372, +91-9634403312</p>
                        <p> <FaEnvelope/> drvyas@gmail.com</p>
                    </div>

                    <div className=" col-sm-4 contactfooter">
                        <h1>Dog Health Library</h1>
                        <p>Arthritis</p>
                        <p>Canine Distemper</p>
                        <p>Feline Distemper</p>
                        <p>Canine Parvovirus</p>
                        <p>Fleas</p>
                        <p>Ticks</p>
                        <p>Obesity</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bottomfoot;