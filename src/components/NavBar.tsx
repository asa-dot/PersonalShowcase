import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      {/* Barra superior */}
      <div className="grid grid-cols-3 items-center border-b-4 border-white max-w-6xl mx-auto px-6 pt-2 pb-1">
        {/* Izquierda: Home y Contact en desktop */}
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`uppercase text-sm tracking-widest ${
                location.pathname === "/"
                  ? "font-bold text-white"
                  : "text-white/70"
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`uppercase text-sm tracking-widest ${
                location.pathname === "/contact"
                  ? "font-bold text-white"
                  : "text-white/70"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Centro: Logo */}
        <a href="/" className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dimmyentl/image/upload/w_800,q_auto,f_auto/v1748337518/ojos-de-logos-blacoa_hfsujx.jpg"
            alt="Logo"
            className="h-20 md:h-24 w-auto"
          />
        </a>

        {/* Derecha: Redes en desktop, menú en móvil */}
        <div className="flex justify-end items-center">
          {/* Iconos sociales en desktop */}
          <div className="hidden md:flex space-x-6">
            <a
              href="https://facebook.com/Chrizfernandezz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a
              href="https://instagram.com/chriizz___"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="https://youtube.com/@chrisfernandez3696"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-xl" />
            </a>
          </div>

          {/* Menú móvil */}
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
          {/* Menú móvil solo Home y Contact */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-12">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`uppercase text-2xl tracking-widest ${
                location.pathname === "/"
                  ? "font-bold text-white"
                  : "text-white/70"
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`uppercase text-2xl tracking-widest ${
                location.pathname === "/contact"
                  ? "font-bold text-white"
                  : "text-white/70"
              }`}
            >
              Contact
            </Link>
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
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
