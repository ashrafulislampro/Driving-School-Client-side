import React from "react";

const BookingListCard = (props) => {
  const { courseInfo } = props.bookingInfo;

  return (
    <section className="col-md-4 p-5">
      <div className="card shadow" style={{ width: "21rem", marginLeft: "12px"}}>
        <div className="d-flex justify-content-between ps-2 pt-2 pe-2">
          <img
            style={{ width: "40px" }}
            src={courseInfo.img}
            class="card-img-top"
            alt="..."
          />
          <a className="btn btn-warning">
           {courseInfo.status}
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title text-uppercase">{courseInfo.title}</h5>

          <p className="card-text">{courseInfo.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BookingListCard;
