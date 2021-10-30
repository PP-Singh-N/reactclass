import React from "react";
import boxer from "./Image/aboutimg.jpeg";
import Petofmonth from "./Image/Banner1.jpg";
import hotdeal from "./Image/hotdeals.jpg";
import videomonth from "./Image/videomonth.jpeg"

const Aboutus=()=>{
    return(
        <>
        <div className="container-fluid ourcliback">
            <div className="row">
                <div className="col-sm-6">

                <h1 class="ourcli">Our Clinic</h1>

                <hr className="ourcliline" />

                <p className="pabout" > Dr. Priyank Vya Pet Hospital & Diagnostic Centre dog clinic and veterinary services has its place in the list of Veterinary Clinics. Organization has an average score of 4 by NiceLocal visitors and concludes its business by the following address: Dehradun, Uttarakhand 248001, opposite Sakti Medicos, Subhash Nagar, Tilak Marg. GPS coordinates are: longitude — 77°59'28.99''E (77.991387), latitude — 30°16'38.15''N (30.277264). </p>

                <div class="row">

                    <div class="col-sm-4">

                        <img src={Petofmonth} class="petmonthcss" />

                        <button class="btn btn-primary full-primary petmonthbutton"> Pet Of Month</button>

                        <p class="image_content pvideomonthcss">It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him. True to her name, she is very easy-going and loves to lounge around all day. She likes atte</p>
                        
                        <span class="read"><a href="#">Read More..</a></span>

                    </div> 

                    <div class="col-sm-4">

                        <img src={hotdeal} class="hotdealcss" />

                        <button class="btn btn-primary full-primary petmonthbutton"> Hot Deals</button>

                        <p class="image_content pvideomonthcss">It was with a very heavy herue to her name, she is very easy-going and loves to lounge around all day. She likes atte</p>
                        
                        <span class="read"><a href="#">Read More..</a></span>

                    </div>
                                    
                    <div class="col-sm-4">

                        <img src={videomonth} class="videomonthcss" />

                        <button class="btn btn-primary full-primary petmonthbutton">Video of Month</button>
                        
                        <p class="image_content pvideomonthcss">It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him. True to her name, she is very easy-going and loves to lounge around all day. She likes atte</p>

                        <span class="read"><a href="#">Read More..</a></span>

                    </div>

                </div>

                </div>

                



                

                <div className="col-sm-6">

                    <img className="aboutdogcss" src={boxer} alt="About this dog" />

                    <button class="btn btn-primary full-primary receptioncss"> Meet Our New Receptonist</button>
                    
                    <p class="image_content preceptioncss">It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him. True to her name, she is very easy-going and loves to lounge around all day. She likes atte</p>
                    
                    <span class="read spanreceptioncss"><a href="#">Read More..</a></span>

                </div>

            </div>
        </div>
        </>
    )
}

export default Aboutus;