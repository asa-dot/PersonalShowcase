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
      PHOTOGRAPHER * FILMMAKER
    </p>

    <div className="mt-12 space-y-6 max-w-2xl mx-auto">
      <p className="text-lg">
        Me especializo en retratos y paisajes urbanos. Con más de 5 años
        capturando momentos únicos, busco transmitir emociones a través de mi
        lente.
      </p>
    </div>
  </div>
);

export default AboutMeContent;
