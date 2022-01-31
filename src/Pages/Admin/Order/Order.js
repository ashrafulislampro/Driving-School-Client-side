import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import Sidebar2 from "../../Sidebar/Sidebar2";
import "./Order.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://gentle-gorge-81848.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  const handleStatus = (event, id) => {
    const status = event.target.value;
    const statusInfo = { id, status };
    fetch(`https://gentle-gorge-81848.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(statusInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Update Status Successfully", {type: "success"});
        }
        else{
          toast("Update Status Failed", { type: "error"})
        }
      });
  };
  console.log(orders);
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-2">
          <Sidebar2></Sidebar2>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-10">
        <ToastContainer/>
          <div className="d-flex justify-content-between pt-4 pb-2 ms-5">
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Order List</h4>
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              {loggedInUser.name}
            </h4>
          </div>
          <div className="common_area">
            <table className="table table" border={1} cellPadding={5}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Service</th>
                  <th>Pay With</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => (
                  <tr key={item._id}>
                    <td className="table_data">{item.name}</td>
                    <td className="table_email">{item.email}</td>
                    <td className="table_data">{item.courseInfo.title}</td>
                    <td className="table_data">Credit Card</td>
                    <td style={{ paddingTop: "25px" }}>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <NativeSelect
                            onChange={(e) => handleStatus(e, `${item._id}`)}
                            defaultValue={30}
                            inputProps={{
                              name: "status",
                              className: "status",
                              id: "uncontrolled-native",
                            }}
                          >
                            <option value="pending">
                              {item.courseInfo.status}
                            </option>
                            <option value="ongoing">On going</option>
                            <option value="done">Done</option>
                          </NativeSelect>
                        </FormControl>
                      </Box>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
