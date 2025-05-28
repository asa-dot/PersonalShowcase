import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <NavBar />
        <main className="pt-24 flex flex-col justify-center items-center min-h-screen space-y-20 bg-[#000000]">
          <h3 className="text-4xl font-bold text-white font-kenygraffiti">
            Home Page
          </h3>
        </main>
      </motion.header>
    </>
  );
};

export default App;
