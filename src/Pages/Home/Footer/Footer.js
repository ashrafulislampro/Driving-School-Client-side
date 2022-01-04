import React from 'react';
import './Footer.css';
import fb from '../../../images/facebook.png';
import path from '../../../images/path.png';
import twitter from '../../../images/twitter.png';
import wifi from '../../../images/wifi-signal.png';
import instruction1 from '../../../images/instruction1.jpg'
import instruction2 from '../../../images/instruction2.jpg'
import instruction3 from '../../../images/instruction3.jpg'
import instruction4 from '../../../images/instruction4.jpg'
const Footer = () => {
          return (
                    <section className="footer_section">
                          <div className=" container">
                          <div className="row">
                              <div className="col-md-3">
                                        <h4 className="py-4" style={{ color: "#3A4256", fontWeight: "700" }}>ABOUT DRIVE ON</h4>
                                        <p className="text-secondary ">It is a long establish fact that is a reader will be distracted by the readable content of page when looking at its layout. It's the more fact that is reader will be by the readable looking it's layout.</p>
                                        <div className="d-flex pt-4">
                                                  <img className="contact_icon" src={fb} alt="" />
                                                  <img className="contact_icon ms-3" src={path} alt="" />
                                                  <img className="contact_icon ms-3" src={twitter} alt="" />
                                                  <img className="contact_icon ms-3" src={wifi} alt="" />
                                        </div>
                              </div>
                              <div className="col-md-3">
                                        <h4 className="py-4" style={{ color: "#3A4256", fontWeight: "700" }}>QUICK CONTACT</h4>
                                        <h5 className="pt-2" style={{ color: "#3A4256", fontWeight: "700" }}>ADDRESS :</h5>
                                        <p className="text-secondary ">Flor. 4,House.15, Block-C. Banasree Main Road, Dhaka.</p>
                                        <h5 className="pt-2" style={{ color: "#3A4256", fontWeight: "700" }}>PHONE :</h5>
                                        <p className="text-secondary ">+880 1712 562 897 <br />+880 1712 562 897</p>
                                       
                                        <h5 className="pt-2" style={{ color: "#3A4256", fontWeight: "700" }}>E-mail </h5>
                                        <p className="text-secondary ">driveonskill@gmail.com <br />www.driveon.com</p>
                                        
                              </div>
                              <div className="col-md-3">
                                        <h4 className="py-4" style={{ color: "#3A4256", fontWeight: "700" }}>BLOG POST</h4>
                                        <div className="d-flex align-items-center">
                                                  <img style={{height: '75px'}} src={instruction1} alt="" />
                                                  <div className="ms-2 pt-2">
                                                            <h5 style={{ color: "#3A4256", fontWeight: "700" }}>NEW PROJECT</h5>
                                                            <p className="text-secondary">It is a long established fact that is a reader.</p>
                                                  </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                                  <img style={{height: '75px'}} src={instruction2} alt="" />
                                                  <div className="ms-2 pt-2">
                                                            <h5 style={{ color: "#3A4256", fontWeight: "700" }}>NEW PROJECT</h5>
                                                            <p className="text-secondary">It is a long established fact that is a reader.</p>
                                                  </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                                  <img style={{height: '75px'}} src={instruction3} alt="" />
                                                  <div className="ms-2 pt-2">
                                                            <h5 style={{ color: "#3A4256", fontWeight: "700" }}>NEW PROJECT</h5>
                                                            <p className="text-secondary">It is a long established fact that is a reader.</p>
                                                  </div>
                                        </div>
                              </div>
                              <div className="col-md-3">
                                        <h4 className="py-4" style={{ color: "#3A4256", fontWeight: "700" }}>INSTAGRAM GALLERY</h4>
                                        
                                                  <div className="d-flex mb-3">
                                                  <img  style={{ height: '75px' }} src={instruction1} alt="" />
                                                  <img  className="ms-2"  style={{ height: '75px' }} src={instruction2} alt="" />
                                                  <img  className="ms-2" style={{ height: '75px' }} src={instruction3} alt="" />
                                                  </div>
                                                  <div className="d-flex mb-3">
                                                  <img style={{ height: '75px' }} src={instruction4} alt="" />
                                                  <img className="ms-2"  style={{ height: '75px' }} src={instruction4} alt="" />
                                                  <img className="ms-2"  style={{ height: '75px' }} src={instruction3} alt="" />
                                                  </div>
                                                 <div className="d-flex">
                                                 <img style={{ height: '75px' }} src={instruction2} alt="" />
                                                  <img className="ms-2" style={{ height: '75px' }} src={instruction1} alt="" />
                                                  <img className="ms-2" style={{ height: '75px' }} src={instruction4} alt="" />
                                                 </div>
                                        
                              </div>
                              
                          </div>
                          <p style={{ marginTop: '200px', textAlign: 'center'}}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                          <hr />
                          </div> 
                          
                          
                    </section>
          );
};

export default Footer;