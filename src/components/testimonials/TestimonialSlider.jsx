import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TestimonialCards from "./TestimonialCards";
import Customer1 from "../../assets/img/testimonials/testimonials-1.jpg";
import Customer2 from "../../assets/img/testimonials/testimonials-2.jpg";
import Customer3 from "../../assets/img/testimonials/testimonials-3.jpg";
import Customer4 from "../../assets/img/testimonials/testimonials-4.jpg";
import Customer5 from "../../assets/img/testimonials/testimonials-5.jpg";

const handleDragStart = (e) => e.preventDefault();

const responsiveObject = {
  0: {
    items: 1,
  },
  1024: {
    items: 2,
  },
};

const items = [
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center items-center w-[90%]  md:w-[80%] lg:w-[100%]  mx-auto"
  >
    <TestimonialCards
      customerName="Saul Goodman"
      jobTitle="CEO &#38; Founder "
      customerImg={Customer1}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias,
      numquam laborum perferendis quo adipisci eius a itaque fugit. Laborum
      porro at facere culpa? Sit quasi praesentium distinctio dolor nemo.{" "}
    </TestimonialCards>
  </div>,

  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-[90%]  md:w-[80%] lg:w-[100%] mx-auto"
  >
    <TestimonialCards
      customerName="Sara Willson"
      jobTitle="Designer "
      customerImg={Customer2}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit
      explicabo expedita illum. Harum, commodi? Cum perferendis enim esse
      officiis pariatur vel similique rerum, optio aliquid et aliquam voluptates
      ut.
    </TestimonialCards>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-[90%]  md:w-[80%] lg:w-[100%] mx-auto"
  >
    <TestimonialCards
      customerName="Jena Karlis"
      jobTitle="Store Owner"
      customerImg={Customer3}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit
      explicabo expedita illum. Harum, commodi? Cum perferendis enim esse
      officiis pariatur vel similique rerum, optio aliquid et aliquam voluptates
      ut.
    </TestimonialCards>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-[90%]  md:w-[80%] lg:w-[100%] mx-auto"
  >
    <TestimonialCards
      customerName="Matt Brandon"
      jobTitle="Freelancer "
      customerImg={Customer4}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit
      explicabo expedita illum. Harum, commodi? Cum perferendis enim esse
      officiis pariatur vel similique rerum, optio aliquid et aliquam voluptates
      ut.
    </TestimonialCards>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-[90%]  md:w-[80%] lg:w-[100%] mx-auto"
  >
    <TestimonialCards
      customerName="John Larson"
      jobTitle="Entreprenuer "
      customerImg={Customer5}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit
      explicabo expedita illum. Harum, commodi? Cum perferendis enim esse
      officiis pariatur vel similique rerum, optio aliquid et aliquam voluptates
      ut.
    </TestimonialCards>
  </div>,
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-[3000px]  mx-auto">
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        disableButtonsControls={true}
        items={items}
        responsive={responsiveObject}
      />
    </div>
  );
};

export default TestimonialSlider;
