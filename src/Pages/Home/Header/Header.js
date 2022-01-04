import React from 'react';
import Navbar1 from './Navbar/Navbar1';
import './Header.css';
import HeaderMain from './HeaderMain/HeaderMain';
const Header = () => {
          return (
                    <main className="main_header">
                           <Navbar1></Navbar1>  
                           <HeaderMain></HeaderMain> 
                    </main>
          );
};

export default Header;