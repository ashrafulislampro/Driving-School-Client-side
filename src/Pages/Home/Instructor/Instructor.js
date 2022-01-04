import React from 'react';
import './Instructor.css';
import fb from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import path from '../../../images/path.png';
import google from '../../../images/google-plus.png';
import people1 from '../../../images/instruction1.jpg';
import people2 from '../../../images/instruction2.jpg';
import people3 from '../../../images/instruction3.jpg';
import people4 from '../../../images/instruction4.jpg';

const Instructor = () => {
          return (
                    <section className="instructor_section">
                             <h2 className="text-center py-3" style={{ color: "#3A4256", fontWeight: "700" }}>INSTRUCTOR</h2> 
                             <p className="text-center text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, odit?</p>
                             <div className="container">
                                       <div className="row py-5 mt-5">
                                       <div className="py-3">
                                                  <h5 style={{ color: "#3A4256", fontWeight: "700" }}>THOMAS SMITH</h5>
                                                  <h6 style={{ color: "#3A4256", fontWeight: "700" }}>Instructor</h6>
                                                  </div>
                                                <div className="col-md-6">
                                                  
                                                  <p className="text-secondary"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab nam facere voluptatibus aspernatur. Voluptas iste, dicta ut commodi beatae nihil id explicabo voluptatum! Accusamus fugiat officia quibusdam omnis temporibus!</span><span>Quasi earum error porro nemo nobis repellendus eligendi minus, illum obcaecati harum alias fugiat quas recusandae dolore quidem enim odio exercitationem vel tenetur iste, iure impedit quibusdam culpa! Dolor, assumenda?</span></p>
                                                  <div className="d-flex pt-3">
                                                            <img className="contact_icon" src={fb} alt="" />
                                                            <img className="contact_icon ms-3" src={twitter} alt="" />
                                                            <img className="contact_icon ms-3" src={path} alt="" />
                                                            <img className="contact_icon ms-3" src={google} alt="" />
                                                  </div>
                                                  <div className="d-flex pt-5">
                                                            <img className="instruction_img" src={people1} alt="" />
                                                            <img className="instruction_img ms-2" src={people2} alt="" />
                                                            <img className="instruction_img ms-2" src={people3} alt="" />
                                                            <img className="instruction_img ms-2" src={people4} alt="" />
                                                  </div>
                                              </div>   
                                              <div className="col-md-6">
                                                  <img style={{height : "370px", float: "right"}} src={people1} alt="" />
                                              </div>   
                                       </div>
                             </div>
                    </section>
          );
};

export default Instructor;