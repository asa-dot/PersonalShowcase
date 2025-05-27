import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 pt-2 pb-1 flex items-center justify-between md:grid md:grid-cols-3 border-b border-white">
        {/* Izquierda: CHRIZ */}
        <a href="/" className="text-white text-2xl font-kenygraffiti">
          CHRIZ
        </a>

        {/* Centro (solo desktop): Logo */}
        <a href="/" className="justify-self-center">
          <img
            src="https://res.cloudinary.com/dimmyentl/image/upload/w_800,q_auto,f_auto/v1748337518/ojos-de-logos-blacoa_hfsujx.jpg"
            alt="Logo"
            className="h-20 md:h-24 w-auto"
          />
        </a>

        {/* Derecha desktop: botones */}
        <nav className="hidden md:flex justify-end space-x-14">
          <button
            type="button"
            className="text-white uppercase text-sm tracking-widest focus:outline-none"
          >
            ABOUT ME
          </button>
          <button
            type="button"
            className="text-white uppercase text-sm tracking-widest focus:outline-none"
          >
            PROJECTS
          </button>
          <button
            type="button"
            className="text-white uppercase text-sm tracking-widest focus:outline-none"
          >
            CONTACT
          </button>
        </nav>

        {/* Hamburger móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white text-2xl"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Panel móvil sliding-up */}
      <div
        className={[
          "fixed bottom-0 left-0 w-full h-screen bg-[#191919] transform transition-transform duration-300 ease-out",
          isOpen
            ? "translate-y-0 pointer-events-auto"
            : "translate-y-full pointer-events-none",
        ].join(" ")}
      >
        {/* Close dentro del panel */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 text-white text-2xl focus:outline-none py-8 px-2"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        {/* Enlaces centrados verticalmente */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-white uppercase text-2xl tracking-widest"
          >
            ABOUT ME
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white uppercase text-2xl tracking-widest"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white uppercase text-2xl tracking-widest"
          >
            CONTACT
          </a>
          {/* añade más enlaces si quieres */}
        </div>

        {/* Iconos sociales abajo */}
        <div className="absolute bottom-8 w-full flex justify-center space-x-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl" />
          </a>
          <a href="#message">
            <FaEnvelope className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
