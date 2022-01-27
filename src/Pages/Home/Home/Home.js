import React from "react";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Instructor from "../Instructor/Instructor";
import Price from "../Price/Price";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <main>
      <Header></Header>
      <Features></Features>
      <Service></Service>
      <Testimonials></Testimonials>
      <Instructor></Instructor>
      <Price></Price>
      <Footer></Footer>
    </main>
  );
};

export default Home;
