import React from "react";
import './Price.css';
const PriceCard = () => {
  return (
    <div className="container py-5">
    <div className="row">
    <div className="col-md-3">
     <div
        className="card card_content"
      >
        <div className="card-header header">
          <h4>BASIC</h4>
        </div>
        <div className="card-body">
           <h2 className="py-5 mb-3"><sup>$</sup>200</h2>
           <p>2 Month Course</p>
           <p>3 Hours Per Day</p>
           <p>Weekly 1 Test</p>
           <p>20 Video Classes</p>
           <p>Driving License</p>
        </div>
        <div className="card-footer footer">
          <h4>CHOOSE PLAN</h4>
        </div>
      </div>
     </div>
     <div className="col-md-3">
     <div
        className="card card_content"
      >
        <div className="card-header header">
          <h4>UPGRADE</h4>
        </div>
        <div className="card-body">
           <h2 className="py-5 mb-3"><sup>$</sup>300</h2>
           <p>3 Month Course</p>
           <p>4 Hours Per Day</p>
           <p>Weekly 2 Test</p>
           <p>25 Video Classes</p>
           <p>Driving License</p>
        </div>
        <div className="card-footer footer">
          <h4>CHOOSE PLAN</h4>
        </div>
      </div>
     </div>
     <div className="col-md-3">
     <div
        className="card card_content"
      >
        <div className="card-header header">
          <h4>SMART</h4>
        </div>
        <div className="card-body">
           <h2 className="py-5 mb-3"><sup>$</sup>400</h2>
           <p>4 Month Course</p>
           <p>5 Hours Per Day</p>
           <p>Weekly 2 Test</p>
           <p>30 Video Classes</p>
           <p>Driving License</p>
        </div>
        <div className="card-footer footer">
          <h4>CHOOSE PLAN</h4>
        </div>
      </div>
     </div>
     <div className="col-md-3">
     <div
        className="card card_content"
      >
        <div className="card-header header">
          <h4>OVER SMART</h4>
        </div>
        <div className="card-body">
           <h2 className="py-5 mb-3"><sup>$</sup>500</h2>
           <p>6 Month Course</p>
           <p>5 Hours Per Day</p>
           <p>Weekly 3 Test</p>
           <p>30 Video Classes</p>
           <p>Driving License</p>
        </div>
        <div className="card-footer footer">
          <h4>CHOOSE PLAN</h4>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
};

export default PriceCard;
