import React from "react";
import "./Price.css";
import PriceCard from "./PriceCard";
const Price = () => {
  return (
    <section className="price_section">
      <div className="text-center">
        <h2 className="heading_text">YOUR PRICING PLAN</h2>
        <p className="text-secondary">
          Which is pricing category do you like?
        </p>
        <div className="heading_separator">
          <div className="separator_line"></div>
          <div className="separator_blob">
            <div></div>
          </div>
        </div>
      </div>
      <PriceCard></PriceCard>
    </section>
  );
};

export default Price;
