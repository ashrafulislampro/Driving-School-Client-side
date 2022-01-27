import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import "./Review.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const reviewsData = {
      name: data.name,
      title: data.title,
      description: data.description,
      img: imageUrl,
    };

    fetch("https://gentle-gorge-81848.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reviewsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Send Your Review Successfully");
        }
      });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set("key", "cb2f23293e08c6ab301b0e0cbade3367");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="d-flex justify-content-between booking_list">
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Review</h4>
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              {loggedInUser.name}
            </h4>
          </div>
          <div className="common_area">
            <div className="col-sm-12 col-md-10 col-lg-8">
              <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control book-input"
                  required
                  {...register("name", { required: true })}
                />

                <input
                  type="text"
                  placeholder="Company's name or Designation"
                  className="form-control book-input mt-3"
                  required
                  {...register("title", { required: true })}
                />

                <textarea
                  type="message"
                  placeholder="Description"
                  rows="5"
                  className="form-control mt-3"
                  required
                  {...register("description", { required: true })}
                ></textarea>

                <br />
                <div className="upload_image">
                  <input
                    type="file"
                    name="file"
                    className="mt-3"
                    onChange={handleImageUpload}
                  />
                  <button onChange={handleImageUpload} className="upload_btn">
                    Upload Image
                  </button>
                </div>

                <input type="submit" className="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
