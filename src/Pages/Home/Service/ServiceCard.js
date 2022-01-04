import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

const ServiceCard = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [courseData, setCourseData] = useContext(UserContext);
  const service = props.service;
  const { imageURL, title, description, price } =service;
  const history = useHistory();
  const handleServiceCard = course => {
    
    const courseInfo = {
      title: course.title,
      price: course.price,
      img: course.imageURL,
      status: 'Pending',
      description: course.description
    }
    

    fetch('https://gentle-gorge-81848.herokuapp.com/addCourse',{
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({courseInfo, email: loggedInUser.email, name: loggedInUser.name})
    })
    .then(res => res.json())
    .then(data => console.log(data));
    setCourseData(courseInfo);
    history.push('/book');
    
  }
  return (
    <section onClick={() => handleServiceCard(service)} className="col-md-3 service_container mb-30 fix text-center">
      <div className="service_card">
        <img className="icons" src={imageURL} alt="" />
        <h5 className="text-uppercase">{title}</h5>
         <h4><sup>$</sup>{price}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ServiceCard;
