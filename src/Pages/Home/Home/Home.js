import React from 'react';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Instructor from '../Instructor/Instructor';
import Price from '../Price/Price';
import Review from '../Reviews/Review';
import Service from '../Service/Service';

const Home = () => {
          return (
                    <main>
                          <Header></Header>
                          <Features></Features> 
                          <Service></Service>
                          <Review></Review> 
                          <Instructor></Instructor>  
                          <Price></Price>
                          <Footer></Footer>
                    </main>
          );
};

export default Home;