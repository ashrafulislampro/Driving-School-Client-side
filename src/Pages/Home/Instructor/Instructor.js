import React from "react";
import "./Instructor.css";
import fb from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import linkedIn from "../../../images/linkedin.png";
import instagram from "../../../images/instagram.png";
import people1 from "../../../images/instruction1.jpg";
import people2 from "../../../images/instruction2.jpg";
import people3 from "../../../images/instruction3.jpg";
import people4 from "../../../images/instruction4.jpg";
import { useState } from "react";

const Instructor = () => {
  const [image, setImage] = useState("pic1");
  return (
    <section className="instructor_section">
      <div className="text-center">
          <h2 className="heading_text">OUR INSTRUCTOR</h2>
          <p className="text-secondary">
            We Teach The Student With Experience Trainer 
          </p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
      <div className="container">
        <div className="row row_container">
          <div className="py-3">
            <h5 style={{ color: "#3A4256", fontWeight: "700" }}>
              THOMAS SMITH
            </h5>
            <h6 style={{ color: "#3A4256", fontWeight: "700" }}>Instructor</h6>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="text-secondary">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam ab nam facere voluptatibus aspernatur. Voluptas iste,
                dicta ut commodi beatae nihil id explicabo voluptatum! Accusamus
                fugiat officia quibusdam omnis temporibus!
              </span>
              <span>
                Quasi earum error porro nemo nobis repellendus eligendi minus,
                illum obcaecati harum alias fugiat quas recusandae dolore quidem
                enim odio exercitationem vel tenetur iste, iure impedit
                quibusdam culpa! Dolor, assumenda?
              </span>
            </p>
            <div className="d-flex">
            <div className="d-flex pt-4">
              <a href="https://www.facebook.com/profile.php?id=100052327922373">
                <img className="contact_icon" src={fb} alt="" />
              </a>
              <a href="https://www.instagram.com/ashrafulislam1659/">
                <img className="contact_icon ms-3" src={instagram} alt="" />
              </a>
              <a href="https://twitter.com/ASHRAFU27859027">
                <img className="contact_icon ms-3" src={twitter} alt="" />
               
              </a>
              <a href="https://www.linkedin.com/in/ashraful-islam-7a7a3620a/">
                <img className="contact_icon ms-3" src={linkedIn} alt="" />
              </a>
            </div>
            </div>
            <div className="d-flex instruction_img_details">
              <img onClick={() => setImage("pic1")} className="instruction_img" src={people1} alt="" />
              <img onClick={() => setImage("pic2")} className="instruction_img ms-2" src={people2} alt="" />
              <img onClick={() => setImage("pic3")} className="instruction_img ms-2" src={people3} alt="" />
              <img onClick={() => setImage("pic4")} className="instruction_img ms-2" src={people4} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            {image === "pic1" && <img className="instructor_img" src={people1} alt="" />}
            {image === "pic2" && <img className="instructor_img" src={people2} alt="" />}
            {image === "pic3" && <img className="instructor_img" src={people3} alt="" />}
            {image === "pic4" && <img className="instructor_img" src={people4} alt="" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
