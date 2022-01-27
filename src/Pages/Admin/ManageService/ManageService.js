import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar2 from '../../Sidebar/Sidebar2';

const ManageService = () => {
          const [loggedInUser, setLoggedInUser] = useContext(UserContext);
          return ( 
          <section className="container-fluid">
          <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-2">
            <Sidebar2></Sidebar2>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-8">
            <div className="d-flex justify-content-between pt-4 pb-2 ms-5">
              <h4 style={{ color: "#3A4256", fontWeight: "700" }}>Manage Service</h4>
              <h4 style={{ color: "#3A4256", fontWeight: "700" }}>
                {loggedInUser.name}
              </h4>
            </div>
            <div className="common_area">
                    <h1 className="py-5 ms-5">Developer Sleeping Now...</h1>
            </div>
          </div>
          </div>
        </section>
          );
};

export default ManageService;