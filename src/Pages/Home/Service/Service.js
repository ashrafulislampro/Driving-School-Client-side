import React, { useEffect, useState } from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
        <div className="text-white text-center py-5">
          <h5 className="py-2 fw-bold">Services</h5>
          <h2 className="fw-bold">COURSE CATEGORY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            culpa!
          </p>
          <div className="w-25 text-center m-auto">
            <hr />
            <hr />
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
        <div className="container-fluid mt-5 pt-5">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={40}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
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
