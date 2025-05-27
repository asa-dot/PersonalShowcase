import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="pt-24 flex flex-col justify-center items-center min-h-screen space-y-20 bg-[#000000]">
        <h3 className="text-4xl font-bold text-white font-kenygraffiti">
          Home Page
        </h3>
      </main>
    </>
  );
};

export default App;
