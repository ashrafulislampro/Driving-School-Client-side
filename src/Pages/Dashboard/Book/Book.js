import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Book.css";
import { useForm } from "react-hook-form";
import { UserContext } from "./../../../App";
import creditCart from "../../../images/credit-cards.png";
import ProcessPayment from "./ProcessPayment/ProcessPayment";
import { useParams } from "react-router-dom";


const Book = () => {
  const { id } = useParams();
  const [loggedInUser] = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const [showPayButton, setShowPayButton] = useState(false);
  useEffect(() => {
    fetch("https://gentle-gorge-81848.herokuapp.com/allService")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const newCourseData = course && course.find((data) => data._id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const courseInfo = {
      title: data.title,
      price: data.price,
      img: newCourseData.imageURL,
      status: 'Pending',
      description: newCourseData.description
  };
  fetch('http://localhost:5000/addBooking',{
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify({courseInfo, email:loggedInUser.email, name:loggedInUser.name})
  })
  .then(res => res.json())
  .then(data => {
    if(data){
      alert("successfully added this course")
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('title').value = '';
      document.getElementById('price').value = '';
      setShowPayButton(true);
    }
  });
  
  console.log(courseInfo);
 
  }

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-8">
          <div className="d-flex justify-content-between booking_list">
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Book</h4>
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              {loggedInUser.name}
            </h4>
          </div>
          <div className="common_area">
            <div className="book_area">
              <form id="form_input" className="form_content" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form-control input_field"
                  placeholder="Your Name"
                  id='name'
                  defaultValue={loggedInUser.name}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <input
                  type="email"
                  className="form-control input_field mt-3"
                  placeholder="Your E-mail"
                  id='email'
                  defaultValue={loggedInUser.email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <input
                  type="text"
                  className="form-control input_field mt-3"
                  placeholder="Course Title"
                  name="title"
                  id='title'
                  defaultValue={newCourseData?.title}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <input
                  type="number"
                  name="price"
                  className="form-control input_field mt-3"
                  placeholder="Course Price"
                  id='price'
                  defaultValue={newCourseData?.price}
                  {...register("price", { required: true })}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <button className="btn submit_button mt-3" type="submit">Add Your Course</button>
              </form>
              
              {showPayButton &&
                <div className="mt-5">
                <div>
                  <h5 className="text-secondary mt-2">Pay with</h5>
                  <p>
                    <img style={{ height: "25px" }} src={creditCart} alt="" />
                    <span className="text-secondary fw-bold ms-2">
                      Credit Card
                    </span>
                  </p>
                </div>
                <div>
                  <ProcessPayment
                    newCourseData={newCourseData}
                  ></ProcessPayment>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
