import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import wheel from '../../images/truck-wheel (1).png';
import dashboard from '../../images/dashboard.png'
import plus from '../../images/add.png';
import add from '../../images/addAdmin.png';
import logout from '../../images/logout.png'
import book from '../../images/shopping-bag.png'
const Sidebar2 = () => {
          return (
                    <section className="sidebar_section d-flex flex-column justify-content-between">
                        
                              <ul className="list-unstyled ">
                              <h2 className="logo_text py-3 ms-5 mb-2">Drive<img className="logo" src={wheel} alt="" />n</h2>
                                        <li>
                                                  <Link className="text-white" to='/order'><img className="booked_icon" src={book} alt="" /><span className="ms-2">Order List</span></Link>
                                        </li>
                                        <li>
                                                  <Link className="text-white" to='/addService'><img className="booked_icon" src={plus} alt="" /><span className="ms-2">Add Service</span></Link>
                                        </li>
                                        <li>
                                                  <Link className="text-white" to='/makeAdmin'><img className="booked_icon" src={add} alt="" /><span className="ms-2">Make Admin</span></Link>
                                        </li>
                                        <li>
                                                  <Link className="text-white" to='/manageService'><img className="booked_icon" src={dashboard} alt="" /><span className="ms-2">Manage Service</span></Link>
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

export default Sidebar2;