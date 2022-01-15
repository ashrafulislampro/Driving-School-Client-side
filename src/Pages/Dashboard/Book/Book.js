import React, { useContext, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Book.css";
import { useForm } from "react-hook-form";
import { UserContext } from "./../../../App";
import creditCart from "../../../images/credit-cards.png";
import ProcessPayment from "./ProcessPayment/ProcessPayment";



const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [courseData, setCourseData] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between pt-4 pb-2 ms-5">
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Book</h4>
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              {loggedInUser.name}
            </h4>
          </div>
          <div className="common_area">
            <div className="col-md-4 ms-5 pt-5">
              <form className="form_content" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form-control input_field"
                  placeholder="Your Name"
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
                  // defaultValue={loggedInUser.title}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <input
                  type="number"
                  className="form-control input_field mt-3"
                  placeholder="Course Price"
                  // defaultValue={loggedInUser.price}
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}

                <div className="mt-5">
                  <h5 className="text-secondary mt-2">Pay with</h5>
                  <p>
                    <img style={{ height: "25px" }} src={creditCart} alt="" />
                    <span className="text-secondary fw-bold ms-2">
                      Credit Card
                    </span>
                  </p>
                  <ProcessPayment></ProcessPayment>
                </div>
                
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
