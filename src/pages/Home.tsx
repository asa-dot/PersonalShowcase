import React from "react";
import NavBar from "../components/NavBar";
import AnimatedSection from "../components/AnimatedSection";
import AboutMeContent from "../components/AboutMeContent";
import "../index.css";
import { motion } from "framer-motion";

import Project from "../components/Project";

const Home: React.FC = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black"
      >
        <NavBar />
      </motion.header>

      <main className="bg-black">
        <div
          id="about"
          className="pt-24 md:pt-28 min-h-[60vh] md:min-h-[52vh] flex items-start justify-center transition-opacity duration-700 opacity-0 animate-fadeIn"
        >
          <AboutMeContent />
        </div>

        {/* Sección projects pegada al about me, título estático */}
        <section
          id="projects"
          className="w-full flex flex-col items-center justify-start"
        >
          <div className="w-full max-w-6xl mx-auto px-2 md:px-5">
            <div className="opacity-0 animate-fadeIn">
              <Project
                image="https://res.cloudinary.com/dimmyentl/image/upload/v1753950999/Imagen_de_WhatsApp_2025-07-31_a_las_01.32.01_0859db68_esjsx9.jpg"
                title="DEVON X CHRIZ"
              />
            </div>
            <AnimatedSection effect="fadeUp" id="project-2" once={false}>
              <Project
                image="https://res.cloudinary.com/dimmyentl/image/upload/v1753951613/UCBFW_x_CHRIZ_Album_kypoor.jpg"
                title="UCBFW X CHRIZ"
                reverse
              />
            </AnimatedSection>
            <AnimatedSection effect="fadeUp" id="project-3" once={false}>
              <Project
                image="https://res.cloudinary.com/dimmyentl/image/upload/v1753951607/ITZA_x_CHRIZ_Album_zqwbob.jpg"
                title="ITZA X CHRIZ"
              />
            </AnimatedSection>
          </div>
        </section>

        <div className="w-full flex justify-center items-end p-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 text-center px-4">
            CHRIZ
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
