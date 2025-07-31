import React from "react";

const AboutMeContent: React.FC = () => (
  <div className="container mx-auto text-center text-white">
    <div className="uppercase tracking-widest items-center justify-center flex">
      <img
        src="https://res.cloudinary.com/dimmyentl/image/upload/v1748420761/chriz-logo_g2ufe1_c_pad_w_1080_h_1080_ar_1_1_zv44c0.jpg"
        alt="Logo"
        className="h-80 w-auto"
      />
    </div>
    <p className="text-sm md:text-base uppercase tracking-widest text-gray-400">
      PHOTOGRAPHER & FILMMAKER
    </p>
  </div>
);

export default AboutMeContent;
