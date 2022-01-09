import React from "react";

import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__profile">
        <div>
          <div className="hero__img">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="hero__info">
        <p>
          👋🏾 Hi I'm <h1>Samuel Geoffrey</h1>
          I am a Graphics designer <br />
          I create design solutions <br />
          for businesses
        </p>
      </div>
    </div>
  );
};
