import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar2 from "../../Sidebar/Sidebar2";
import "./AddService.css";
import { useForm } from "react-hook-form";
import upload from '../../../images/cloud-upload-outline 1.png';
import axios from "axios";
import { useState } from "react";
const AddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
          const service ={
                    title: data.title,
                    price: data.price,
                    description: data.description,
                    imageURL: imageURL
          }
            fetch('https://gentle-gorge-81848.herokuapp.com/addService',{
                      method: 'POST',
                      headers: { 'Content-type': 'application/json'},
                      body: JSON.stringify(service)
            })
            .then(res => res.json())
            .then(data => {
              if(data){
                alert("Added New Service Successfully")
              }
            })
          };

          const handleImageUpload = (event) => {
                    console.log(event.target.files);
                    const imageData = new FormData();
                    imageData.set('key', "cb2f23293e08c6ab301b0e0cbade3367");
                    imageData.append('image', event.target.files[0]);

                    axios.post("https://api.imgbb.com/1/upload", imageData)
                    .then(res => setImageURL(res.data.data.display_url))
                    .catch(error => console.log(error))

          }
  return (
    <section className="container-fluid row">
      <div className="col-md-2">
        <Sidebar2></Sidebar2>
      </div>
      <div className="col-md-8">
        <div className="d-flex justify-content-between pt-4 pb-2 ms-5">
          <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Add Service</h4>
          <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
            {loggedInUser.name}
          </h4>
        </div>
        <div className="common_area">
         <div className="ms-5 pt-5">
         <form className="form_content" onSubmit={handleSubmit(onSubmit)}>
         <div className="content">
          <label style={{color: "#3A4256", fontWeight: "700" }} htmlFor="title">
          Title
          <br />
          <input
                  type="text"
                  placeholder="Enter Title"
                  name="title"
                  className="form-control common_input"
                  required
                  {...register("title", { required: true })}
                />
          </label>

               <label className="ms-4" style={{color: "#3A4256", fontWeight: "700" }} htmlFor="price">
                         Course Price
                         <br />
                         <input
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  className="form-control common_input"
                  required
                  {...register("price", { required: true })}
                />
               </label>
                    <br />
                <div className="d-flex">
                <label className="mt-4" style={{color: "#3A4256", fontWeight: "700" }} htmlFor="description">
                          Description
                          <br />
                          <textarea
                  type="message"
                  placeholder="Enter Description"
                  rows="5"
                  cols="53"
                  name="description"
                  className="form-control"
                  required
                  {...register("description", { required: true })}
                ></textarea>
                </label>
                <label className="ms-4  mt-4 upload-image" style={{color: "#3A4256", fontWeight: "700" }} htmlFor="image">
                          Image
                          <br />
                         <input onChange={handleImageUpload} type="file" name="file" required/>
                         <button className="upload_button"><img style={{height: '20px', marginRight : '10px'}}src={upload} alt="" />Upload Image</button>
                </label>
                </div>
                </div>
                <br />
            <input type="submit" className="add_submit" value="Submit"/>
          </form>
         </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
