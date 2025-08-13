

import React from "react";

const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif",
};

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 mb-20 text-center"
      style={{ fontFamily: fonts.body }} // body font for whole section
    >
      <h2
        className="text-4xl font-light mb-6"
        style={{
          background: `linear-gradient(90deg, #607d82 0%, #89a0a3 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: fonts.heading, // heading font
        }}
      >
        About Us
      </h2>

      <p className="text-gray-700 text-lg font-light" style={{ fontFamily: fonts.body }}>
        At Jay Kay Designs, we specialize in custom display racks, shelving systems, and fabrication for showrooms,
        helping businesses create an aesthetically appealing and functional retail space. Our expertise lies in designing
        and fabricating shelves, stands, and racks tailored to showcase your products effectively while enhancing customer
        engagement. We understand that every showroom has unique requirements, and our team works closely with clients to
        deliver high-quality, durable, and visually striking display solutions that align with their brand identity and
        space constraints.
      </p>

      <p className="text-gray-700 text-lg font-light mt-6" style={{ fontFamily: fonts.body }}>
        With years of experience in metal fabrication, we offer a range of custom shelving systems that maximize space
        utilization while maintaining a sophisticated and modern look. Our designs integrate premium materials and
        cutting-edge techniques to ensure long-lasting durability, stability, and ease of maintenance. Whether you need
        modular display stands, wall-mounted racks, or freestanding shelving units, our solutions cater to a variety of
        retail and commercial needs, making it easier for businesses to attract and retain customers through effective
        product presentation.
      </p>

      <p className="text-gray-700 text-lg font-light mt-4" style={{ fontFamily: fonts.body }}>
        At Jay Kay Designs, our commitment to excellence extends beyond fabrication. We provide end-to-end services,
        including design consultation, prototyping, and installation, ensuring that every piece meets the highest standards
        of quality and craftsmanship. Our goal is to help showrooms, retail stores, and commercial spaces create an
        inviting and professional ambiance through customized fabrication solutions. If you’re looking for innovative
        shelving systems and display racks that enhance your showroom’s appeal, trust us to bring your vision to life with
        precision and expertise.
      </p>
    </section>
  );
}
