import React from "react";

const BookingListCard = (props) => {
  const { courseInfo } = props.bookingInfo;

  return (
    <section className="col-sm-12 col-md-6 col-lg-4">
      <div className="card card_container shadow">
        <div className="d-flex justify-content-between">
          <img
            style={{ width: "40px" }}
            src={courseInfo.img}
            class="card-img-top"
            alt="..."
          />
          <button className="btn btn-warning">
           {courseInfo.status}
          </button>
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
