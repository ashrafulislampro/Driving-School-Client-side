import React, { useEffect, useState } from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const Service = () => {
  const [serviceInfo, setServiceInfo] = useState([]);
  useEffect(() => {
    fetch("https://gentle-gorge-81848.herokuapp.com/allService")
      .then((res) => res.json())
      .then(data =>{
        if(data.length > 0){
          toggleSpinner();
          setServiceInfo(data);
        }
      });
  }, []);

  const toggleSpinner =()=>{
    const spinner = document.getElementById("spinner_buffer");
    spinner.classList.toggle("d-none")
  }
  return (
    <section className="service_section">
      <div className="container">
      <div className="text-center">
          <h2 className="heading_text text-white">COURSE CATEGORY</h2>
          <p className="text-white">
            We provide this kind of service
          </p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
        <div
          id="spinner_buffer"
          className="d-done d-flex justify-content-center pt-4"
        >
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="container">
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
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            loop={Infinity}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction:false
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="row">
              {serviceInfo.map((data) => (
                <SwiperSlide key={data._id}>
                  <ServiceCard service={data}></ServiceCard>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
