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
    .then(data => setReviews(data))
  }, []);
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
