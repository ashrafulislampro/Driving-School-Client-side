import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://gentle-gorge-81848.herokuapp.com/allReviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          toggleSpinner();
          setReviews(data);
        }
      });
  }, []);

  const toggleSpinner = () => {
    const spinner = document.getElementById("spinner-buffer");
    spinner.classList.toggle("d-none");
  };
  return (
    <section className="review_section">
      <div className="text-center">
          <h2 className="heading_text">TESTIMONIALS</h2>
          <p className="black">
             What's say our client?
          </p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>

      <div className="container">
        <div
          id="spinner-buffer"
          className="d-done d-flex justify-content-center pt-4"
        >
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <Swiper
        breakpoints={{
               360:{
                 width: 360,
                 slidesPerView: 1
               },
               375:{
                 width: 360,
                 slidesPerView: 1
               },
               600:{
                 width: 600,
                 slidesPerView: 2,
                 spaceBetween: 20
               },
               810:{
                 width: 810,
                 slidesPerView: 2,
                 spaceBetween: 15
               },
               920:{
                  width: 920,
                  slidesPerView: 3,
                  spaceBetween: 10
               },
               1110:{
                 width: 1110,
                 slidesPerView: 3,
                 spaceBetween: 10
               },
               1300:{
                 width: 1300,
                 slidesPerView: 4,
                 spaceBetween: 10
               }
            }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
          spaceBetween={10}
          slidesPerView={4}
          effect="coverflow"
          grabCursor={true}
          loop={Infinity}
          centeredSlides={true}
          autoplay={{ 
            delay: 2500,
            disableOnInteraction: false
          }}
          EffectCoverFlow={{ 
            rotate: 45,
            stretch: 0,
            depth: 100, 
            modifier: 1,
            slideShadows: true
          }}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="row mt-5">
            {reviews.map((reviewInfo) => (
              <SwiperSlide key={reviewInfo._id}>
                <TestimonialCard reviewInfo={reviewInfo}></TestimonialCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
