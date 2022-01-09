import React from "react";
import "./Services.scss";

export const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">My Services</h2>

      <div className="services__container">
        <div className="services__part">
          <div className="services__service">
            <h4>Flyers</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="services__part">
          <div className="services__service">
            <h4>Posters</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="services__service">
            <h4>Adverts</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="services__part">
          <div className="services__service">
            <h4>Banner</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
