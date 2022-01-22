import React from "react";
import "./Features.css";
import sheering from "../../../images/sheering.jpg";
import license from "../../../images/driver-license.png";
import carIcon from "../../../images/car-compact.png";
import videoIcon from "../../../images/youtube.png";
import clockIcon from "../../../images/clock.png";
import manIcon from "../../../images/businessman.png";
import roadIcon from "../../../images/signpost.png";
const Features = () => {
  return (
    <section className="features_section">
        <div className="feature_text_content text-center">
          <h2 className="heading_text">OUR FEATURES</h2>
          <p className="text-secondary">
             Features That We Provide
          </p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
        
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="d-flex align-items-center feature_text">
              <div>
                <h5>Quick License</h5>
                <p>
                  Lorem ipsum dolor sit amet to be consectetur adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div>
                <img style={{ height: "30px" }} src={license} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center feature_text">
              <div>
                <h5>Video Classes</h5>
                <p>
                  Lorem ipsum dolor sit amet to be consectetur adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div>
                <img className="icons" src={videoIcon} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center feature_text">
              <div>
                <h5>Unlimited Car Support</h5>
                <p>
                  Lorem ipsum dolor sit amet to be consectetur adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div>
                <img className="icons" src={carIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="feature_img" src={sheering} alt="" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="d-flex align-items-center feature_text">
              <div>
                <h5>Experience Instructors</h5>
                <p>
                  Lorem ipsum dolor sit amet to be consectetur adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div>
                <img style={{ height: "30px" }} src={manIcon} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center feature_text">
              <div>
                <h5>Any Time Any Place</h5>
                <p>
                  Lorem ipsum dolor sit amet to be consectetur adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div>
                <img style={{ height: "30px" }} src={clockIcon} alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center feature_text_role feature_text">
              <div>
                <h5>Learning Roads</h5>
                <p>
                  Lorem ipsum dolor sit amet to be consectetur adipiscing elit,
                  sed do eiusmod tempor.
                </p>
              </div>
              <div>
                <img style={{ height: "30px" }} src={roadIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
