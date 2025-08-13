

import React from "react";
const fonts = {
  heading: "'Playfair Display', serif"
};
export default function Hero({ handleScroll }) {
  return (
    <section
      id="home"
      className="relative w-full max-w-full min-h-[450px] sm:h-[600px] md:h-[700px] overflow-hidden"
      style={{
        fontFamily: fonts.heading,
      }}
    >
      <img
        src="/jkimg/jkhero1.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover rounded-bl-3xl rounded-br-3xl "
      />
      <div className="absolute inset-0 bg-[rgba(96,125,130,0.45)] rounded-bl-3xl rounded-br-3xl"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[450px] sm:h-full px-6 sm:px-12 md:px-24">
        <h1 className="text-white text-5xl md:text-6xl font-thin mb-6 drop-shadow-lg max-w-3xl">
          Custom Display Racks & Shelving Systems
        </h1>
        <p className="text-white/90 max-w-xl text-lg md:text-xl drop-shadow-lg mb-10">
          Helping businesses create aesthetic and functional retail spaces
          with tailored fabrication and design.
        </p>
        <a
          href="#gallery"
          onClick={(e) => handleScroll(e, "gallery")}
          className="inline-block px-10 py-4 rounded-full font-light shadow-xl bg-gradient-to-r from-[#607d82] to-[#89a0a3] text-white hover:scale-105 transition"
        >
          Explore Our Designs
        </a>
      </div>
    </section>
  );
}



