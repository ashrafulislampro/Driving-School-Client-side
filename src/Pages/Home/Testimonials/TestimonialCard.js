import React from "react";
import { Card } from "react-bootstrap";
import "./Testimonial.css";
const TestimonialCard = (props) => {
  const { name, title, description, img } = props.reviewInfo;
  return (
    <section className="col-md-3 py-5 mt-5 pt-5">
      <Card className="shadow" style={{ width: "18rem", height: "21rem" }}>
        <div className="d-flex py-5 p-1">
          <Card.Img className="card_img" src={img} />
          <div>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{title}</Card.Title>
          </div>
        </div>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default TestimonialCard;
