import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import BookingListCard from "./BookingListCard";

const BookList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const [courseInfo, setCourseInfo] = useState([]);
  useEffect(() => {
    fetch("https://gentle-gorge-81848.herokuapp.com/booking?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setCourseInfo(data));
  }, [loggedInUser.email]);
  
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between pt-4 pb-2 ms-5">
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              Course List
            </h4>
            <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
              {loggedInUser.name}
            </h4>
          </div>
          <div className="common_area">
            <div className="row">
              {courseInfo.map((bookingInfo) => (
                <BookingListCard
                  bookingInfo={bookingInfo}
                  key={bookingInfo._id}
                ></BookingListCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookList;
