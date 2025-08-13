
import React from "react";

const primary = "#607d82";
const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif",
};

export default function Navbar({ handleScroll, setNavOpen }) {
  return (
    <nav
      className=" shadow-md flex items-center justify-between px-6  md:px-14"
      style={{
        background: primary,
        // borderBottomLeftRadius: "1.5rem",
        // borderBottomRightRadius: "1.5rem",
        height: "60px",
        fontFamily: fonts.body,
      }}
    >
      {/* Logo on left with no background */}
      <div
        className="flex items-center justify-start"
        style={{ height: "60px", cursor: "pointer" }}
        onClick={(e) => handleScroll(e, "home")}
      >
        <img
          src="/jkimg/jaykaylogo3.png"
          alt="JayKay Designs Logo"
          className="object-contain"
          style={{
            maxHeight: "60px",
            width: "auto",
            background: "transparent", // ensure no background applied
          }}
        />
      </div>

      {/* Nav links on the right */}
      <ul
        className="hidden md:flex gap-10 font-light text-white text-sm"
        style={{ fontFamily: fonts.body }}
      >
        {["home", "gallery", "about", "contact", "location"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="hover:text-[#b6ddf2] transition"
              onClick={(e) => handleScroll(e, id)}
              style={{ fontFamily: fonts.body }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white bg-transparent p-2 focus:outline-none rounded-full"
        onClick={() => setNavOpen(true)}
        style={{ border: "none" }}
        aria-label="Open menu"
      >
        <i className="fas fa-bars text-lg"></i>
      </button>
    </nav>
  );
}






