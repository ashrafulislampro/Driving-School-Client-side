import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import wheel from '../../images/truck-wheel (1).png';
import shop from '../../images/shopping-bag.png'
import cart from '../../images/cart.png';
import review from '../../images/review (1).png';
import logout from '../../images/logout.png'
const Sidebar = () => {
          return (
                    <section className="sidebar_section d-flex flex-column justify-content-between">
                              <ul className="list-unstyled ">
                                   <h2 className="logo_text py-3 ms-5 mb-2">Drive<img className="logo" src={wheel} alt="" />n</h2>
                                        <li>
                                                  <Link className="text-white" to='/book'><img className="booked_icon" src={cart} alt="" /><span className="ms-2">Book</span></Link>
                                        </li>
                                        <li>
                                                  <Link className="text-white" to='/bookingList'><img className="booked_icon" src={shop} alt="" /><span className="ms-2">Booking list</span></Link>
                                        </li>
                                        <li>
                                                  <Link className="text-white" to='/review'><img className="booked_icon" src={review} alt="" /><span className="ms-2">Review</span></Link>
                                        </li>
                              </ul>
                              <div className="list-unstyled mb-5">
                                        <li>
                                                  <Link className="text-white ms-5 text-decoration-none" to='/home'><img className="booked_icon" src={logout} alt="" /><span className="ms-2">Log Out</span></Link>  
                                        </li>
                              </div>
                         
                    </section>
          );
};

export default Sidebar;