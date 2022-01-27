import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from './../../../App';


const ServiceCard = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [course, setCourse] = useContext(UserContext);
  const service = props.service;
  const { imageURL, title, description, price, _id } =service;
  const history = useHistory();

  const handleServiceCard = id => {
    
    
    // setCourse({...loggedInUser, ...courseInfo})
    // fetch('https://gentle-gorge-81848.herokuapp.com/addCourse',{
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json'},
    //   body: JSON.stringify({courseInfo, email:loggedInUser.email, name:loggedInUser.name})
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));
    history.push(`/book/${id}`);
    
  }
  // console.log(service._id);
  return (
    <section onClick={() => handleServiceCard(_id)} className="col-md-3">
      <div className=" service_container mb-30 fix text-center">
      <div className="service_card">
        <img className="icons" src={imageURL} alt="" />
        <h5 className="text-uppercase">{title}</h5>
         <h4><sup>$</sup>{price}</h4>
        <p>{description}</p>
      </div>
      </div>
    </section>
  );
};

export default ServiceCard;
