import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "./Image/Banner1.jpg";
import ban2 from "./Image/Banner2.jpg";
import ban3 from "./Image/Banner3.jpg";


const Carousbanner =()=> {
    return(
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban1}
      alt="First slide"
      height="680px"
    />
    <Carousel.Caption>
      <h3>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban2}
      alt="Second slide"
      height="680px"
    />

    <Carousel.Caption>
      <h3>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban3}
      alt="Third slide"
      height="680px"
    />

    <Carousel.Caption>
      <h3>Dr. Priyank Vyas Pet Hospital & Diagnostic Centre dog clinic and veterinary services</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Carousbanner;