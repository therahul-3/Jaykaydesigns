 
import React from "react";
const primary = "#607d82";
const galleryBg = "#d9e3e5";

const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif"
}


export default function Gallery({ galleryImages, setModalOpen, setCurrentImage }) {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-6 mb-6 mt-5">
      <h2
        className="text-4xl font-light text-center mb-6"
        style={{
          background: `linear-gradient(90deg, ${primary} 0%, #89a0a3 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: fonts.heading
        }}
      >
        Our Designs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            // className="rounded-3xl shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition"
            className="rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden transition transform duration-300 hover:-translate-y-2 hover:scale-105"
            style={{ backgroundColor: galleryBg }}
            onClick={() => {
              setCurrentImage(img);
              setModalOpen(true);
            }}
          >
            <img src={img.src} alt={img.title} className="h-48 w-full object-cover rounded-3xl" />
            <div className="p-4">
              <h3 className="font-light text-lg" style={{ color: primary, fontFamily: fonts.heading }}>
                {img.title}
              </h3>
              <p className="text-gray-600 text-xs">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
