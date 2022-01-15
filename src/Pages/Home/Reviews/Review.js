import React, { useEffect, useState } from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://gentle-gorge-81848.herokuapp.com/allReviews')
    .then(res => res.json())
    .then(data => {
      if(data.length > 0){
        toggleSpinner();
        setReviews(data);
         }
      })
  }, []);
  const toggleSpinner =() =>{
      const spinner = document.getElementById("spinner-buffer");
      spinner.classList.toggle("d-none");
  }
  return (
    <section className="review_section">
      <div>
        <h4
          className="text-center"
          style={{ color: "#3A4256", fontWeight: "700" }}
        >
          Testimonials
        </h4>
      </div>

      <div className="container">
        <div id="spinner-buffer" className="d-done d-flex justify-content-center pt-4">
        <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
         </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="row mt-5">
            {reviews.map((reviewInfo) =>  <SwiperSlide key={reviewInfo._id}>
              <ReviewCard
                reviewInfo={reviewInfo}
                
              ></ReviewCard>
            </SwiperSlide>)}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
