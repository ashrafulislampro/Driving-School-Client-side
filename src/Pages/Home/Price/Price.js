import React from 'react';
import './Price.css';
import PriceCard from './PriceCard';
const Price = () => {
          return (
                    <section className="price_section">
                              <h2 style={{ color: "#3A4256", fontWeight: "700" }} className="text-center pb-3">YOUR PRICING PLAN</h2>
                              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aliquid</p>
                              <PriceCard></PriceCard>
                    </section>
          );
};

export default Price;