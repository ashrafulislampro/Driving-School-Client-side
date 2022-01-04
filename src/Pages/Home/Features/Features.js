import React from 'react';
import './Features.css';
import sheering from '../../../images/sheering.jpg';
import license from '../../../images/driver-license.png';
import carIcon from '../../../images/car-compact.png';
import videoIcon from '../../../images/youtube.png';
import clockIcon from '../../../images/clock.png';
import manIcon from '../../../images/businessman.png';
import roadIcon from '../../../images/signpost.png';
const Features = () => {
          return (
                    <section className="features_section">
                    <div className=" container">
                              <div className="text-center">
                              <h3 style={{color : "#30302f", fontWeight: "700"}} className="pb-3">OUR FEATURES</h3>
                              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quam.</p>
                              </div>
                              <div className="d-flex pt-5 mt-5">
                                        <div>
                                                  <div className="d-flex align-items-center p-3 ps-2 feature_text">
                                                            <div>
                                                            <h5>Quick License</h5>
                                                            <p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                            <div>
                                                            <img className="ms-3 me-3" style={{height: "30px"}} src={license} alt="" />
                                                            </div>
                                                  </div>
                                                  <div className="d-flex align-items-center p-3 ps-2 feature_text">
                                                            <div>
                                                            <h5>Video Classes</h5>
                                                            <p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                            <div>
                                                            <img className="ms-3 me-3 icons" src={videoIcon} alt="" />
                                                            </div>
                                                  </div>
                                                  <div className="d-flex align-items-center p-3 ps-2 feature_text">
                                                             <div>
                                                            <h5>Unlimited Car Support</h5>
                                                            <p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                            <div>
                                                            <img className="ms-3 me-3 icons" src={carIcon} alt="" />
                                                            </div>
                                                  </div>
                                        </div>
                                        <div>
                                                  <img style={{width: "440px", height: "385px"}} src={sheering} alt="" />
                                        </div>
                                        <div>
                                                  <div className="d-flex align-items-center p-3 ps-4 feature_text">
                                                            <div>
                                                            <h5>Experience Instructors</h5>
                                                            <p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                            <div>
                                                            <img className="ms-3 me-3" style={{height: "30px"}} src={manIcon} alt="" />
                                                            </div>
                                                  </div>  
                                                  <div className="d-flex align-items-center p-3 ps-4 feature_text">
                                                            <div>
                                                            <h5>Any Time Any Place</h5>
                                                            <p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                            <div>
                                                            <img className="ms-3 me-3" style={{height: "30px"}} src={clockIcon} alt="" />
                                                            </div>
                                                  </div>
                                                  <div className="d-flex align-items-center p-3 ps-4 feature_text">
                                                            <div>
                                                            <h5>Learning Roads</h5>
                                                            <p>Lorem ipsum dolor sit amet to be consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                            <div>
                                                            <img className="ms-3 me-3" style={{height: "30px"}} src={roadIcon} alt="" />
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              </div>
                    </section>
          );
};

export default Features;