import React from "react";
import { Carousel, Button } from "react-bootstrap";

function Corousal() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/OTC/Homepage/OTC_GW-desktop_Phase-2-v1_2x-3000x1200._CB669940857_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/CIND_2021_GWBleedingHero_3000x1200_PRE_Final_en-US_PVD7333_Cinderella._CB664771797_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/G/01/PLF/Goodthreads/2021/SUMMER/Gateway/Hero/GT_W_Prints_GW_HERO_DESKTOP_3000x1200._CB668340557_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousal;
