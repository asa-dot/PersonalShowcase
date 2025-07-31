import React from "react";

interface ProjectProps {
  image: string;
  title: string;
  reverse?: boolean; // Para alternar el layout en desktop
}

const Project: React.FC<ProjectProps> = ({ image, title, reverse }) => {
  return (
    <div
      className={`group flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-stretch gap-0 mb-16 rounded-sm overflow-hidden shadow-lg uppercase cursor-pointer select-none`}
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      {/* Imagen con overlay blanco opaco al hacer hover */}
      <div className="w-full md:w-3/5 flex relative">
        <img
          src={image}
          alt={title}
          className="w-full h-80 md:h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 pointer-events-none" />
      </div>
      {/* Título con altura igual a la imagen */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-[#1b1b1b] px-7 py-8 md:px-0 md:py-0 transition-all duration-300 group-hover:bg-white/70 group-active:bg-white/70">
        <h3 className="text-xl md:text-2xl text-white text-center w-full transition-all duration-300 group-hover:text-black group-active:text-black">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Project;
