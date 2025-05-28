import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      {/* Barra superior */}
      <div className="grid grid-cols-3 items-center border-b-4 border-white max-w-6xl mx-auto px-6 pt-2 pb-1">
        {/* Izquierda: CHRIZ */}
        <a
          href="/"
          className="inline-flex items-center text-white text-xl font-kenygraffiti mt-2 leading-none w-fit"
        >
          CHRIZ
        </a>

        {/* Centro: Logo */}
        <a href="/" className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dimmyentl/image/upload/w_800,q_auto,f_auto/v1748337518/ojos-de-logos-blacoa_hfsujx.jpg"
            alt="Logo"
            className="h-20 md:h-24 w-auto"
          />
        </a>

        {/* Derecha: Botón menú (swap) */}
        <div className="flex justify-end items-center">
          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-14">
            <button className="text-white uppercase text-sm tracking-widest">
              ABOUT ME
            </button>
            <button className="text-white uppercase text-sm tracking-widest">
              PROJECTS
            </button>
            <button className="text-white uppercase text-sm tracking-widest">
              CONTACT
            </button>
          </nav>

          {/* Botón móvil */}
          <label className="swap swap-rotate md:hidden z-50 relative">
            <input
              type="checkbox"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            />

            {/* Ícono hamburguesa */}
            <svg
              className="swap-off fill-white w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* Ícono cerrar */}
            <svg
              className="swap-on fill-white w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] bg-[#191919] z-40 transition-all duration-500 ease-in-out origin-top-right scale-0 opacity-0 ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        <div className="relative h-full w-full">
          {/* Menú móvil */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-12">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-white uppercase text-2xl tracking-widest"
            >
              ABOUT ME
            </a>
            <a
              href="#projects"
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
          </div>

          {/* Iconos sociales */}
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
      </div>
    </header>
  );
};

export default NavBar;
