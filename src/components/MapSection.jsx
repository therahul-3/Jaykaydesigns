import React from "react";
const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif"
}

export default function MapSection() {
  return (
    <section id="location" className="mb-20 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg px-4 py-6">
      <h2
        className="text-4xl font-light text-center mb-6"
        style={{
          background: `linear-gradient(90deg, #607d82 0%, #89a0a3 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: fonts.heading
        }}
      >
        Our Showroom Location
      </h2>
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-md max-w-[800px] mx-auto bg-white pb-9"
        style={{ paddingBottom: "56.25%", height: 0 }}
      >
        <iframe
          title="JayKay Designs Location"
          src="
      https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.097011520903!2d76.9754296753418!3d11.031347954439292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85954a0fbb681%3A0xa502f92779abe909!2sJAYKAY%20DESIGNS!5e0!3m2!1sen!2sin!4v1749476897450!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
        />
      </div>
    </section>
  );
}
