import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar2 from "../../Sidebar/Sidebar2";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://gentle-gorge-81848.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          document.getElementById('email').value = "";
          toast("Added New Admin Successfully", {type: "success"});
        }
        else{
          toast("Failed To add Admin", {type: "error"});
        }
      });
  };
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-2">
          <Sidebar2></Sidebar2>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-10">
        <ToastContainer/>
          <div className="d-flex justify-content-between pt-4 pb-2 ms-5">
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Make Admin</h4>
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              {loggedInUser.name}
            </h4>
          </div>
          <div className="admin_area">
            <div className="">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="content">
                  <label
                    style={{ color: "#3A4256", fontWeight: "700" }}
                    htmlFor="email"
                  >
                    Add Admin
                    <br />
                    <input
                      type="email"
                      placeholder="Enter E-mail"
                      name="email"
                      id="email"
                      className="form-control common-input"
                      required
                      {...register("email", { required: true })}
                    />
                  </label>
                  <input type="submit" className="admin_btn" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
