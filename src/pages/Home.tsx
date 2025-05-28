import React from "react";
import NavBar from "../components/NavBar";
import AnimatedSection from "../components/AnimatedSection";
import AboutMeContent from "../components/AboutMeContent";
import "../index.css";
import { motion } from "framer-motion";

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
        <AnimatedSection
          id="about"
          className="pt-24 md:pt-28 min-h-screen flex items-start justify-center"
        >
          <AboutMeContent />
        </AnimatedSection>

        {/* Ejemplo para más secciones:
        <AnimatedSection id="projects" className="min-h-screen">
          <ProjectsContent />
        </AnimatedSection>
        */}
      </main>
    </>
  );
};

export default Home;
