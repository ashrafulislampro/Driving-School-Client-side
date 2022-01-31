import React from "react";
import { Button } from "react-bootstrap";
import "../Header.css";
import icon from '../../../../images/car-compact.png';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import './HeadersMain.css';
import Zoom from 'react-reveal';
const HeaderMain = () => {
  const history = useHistory();
  const handleBookButton =()=>{
    history.push('/bookingList')
  }
  const handleLearnButton=()=>{
    history.push('/commonIssue');
  }
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if(data) {
      alert("Your Information Send Successfully")
    }
  };
  return (
    <section className="header_container">
    <div className="container">
      <div className="row">
      <Zoom>
        <div className="col-sm-12 col-md-6 col-lg-8">
          <div className="header_text">
          <h3>WELCOME TO DRIVE ONE</h3>
          <h1>
            THE BEST <span>SAFETY</span> MEASURES
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            impedit dignissimos optio rem, eum assumenda natus. Nihil, odio
            alias aut quos incidunt quidem numquam sit voluptates. Doloribus
            quisquam corrupti eaque.
          </p>
          <div className="d-flex pt-3">
            <Button onClick={handleBookButton} variant="warning" className="button">
              BOOK LESSON
            </Button>
            <Button onClick={handleLearnButton} variant="light" className="btn ms-3">
              LEARN MORE
            </Button>
          </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form_card">
           <div className="top_content">
           <h5>FIND YOUR COURSE</h5>
           <img className="icon" src={icon} alt="" />
           </div>
            <form className="p-3 form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="form-control mt-2"
                name="name"
                placeholder="Your Name"
                required
                {...register('name', { required : true})}
              />
              <input
                type="email"
                className="form-control mt-2"
                name="email"
                placeholder="Your E-mail"
                required
                {...register('email', { required : true})}
              />
              <input
                type="tel"
                className="form-control mt-2"
                name="phone"
                placeholder="Phone"
                required
                {...register('phone', { required : true})}
              />
              <div className="row">
                <div className="col-6">
                  <input type="time" className="form-control mt-2"
                   name="time" placeholder="Time"
                   required
                   {...register('time', { required : true})}
                     />
                </div>
                <div className="col-6">
                  <input type="date" className="form-control mt-2"
                   name="date" placeholder="Date"
                   required
                   {...register('date', { required : true})}
                     />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <select className="form-control mt-2" {...register('course', { required : true})} required name="course" id="text_select">
                    <option value="Not selected" disabled>Course Type</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                    <option value="course3">Course 3</option>
                  </select>
                </div>
                <div className="col-6">
                  <select className="form-control mt-2" {...register('car', { required : true})} required name="car" id="text_select">
                    <option value="Not selected" disabled>Car Type</option>
                    <option value="car1">Car 1</option>
                    <option value="car2">Car 2</option>
                    <option value="car3">Car 3</option>
                  </select>
                </div>
              </div>
              <input className="form-control mt-4" id="submit_btn" type="submit" value="Send Us" />
            </form>
          </div>
        </div>
        </Zoom>
      </div>
      </div>
    </section>
  );
};

export default HeaderMain;
