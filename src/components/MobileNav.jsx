
import React, { useEffect } from "react";

const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif",
};

export default function MobileNav({ navOpen, setNavOpen, handleScroll }) {
  // Auto-close menu if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setNavOpen]);

  if (!navOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex ">
      {/* Overlay */}
      <div
        className="flex-1"
        onClick={() => setNavOpen(false)}
      ></div>

      {/* Slide-in panel */}
      <div
        className="w-64 bg-white h-full shadow-2xl transform transition-transform duration-500 translate-x-0 rounded-tl-3xl relative"
        style={{
          maxWidth: "80vw",
          borderTopRightRadius: 0,
          borderBottomRightRadius: "2rem",
          fontFamily: fonts.body,
        }}
      >
        {/* Close button - no background hover */}
        <button
          onClick={() => setNavOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full focus:outline-none"
          style={{ border: "none" }}
          aria-label="Close menu"
        >
          <i
            className="fas fa-times text-gray-700 transition-colors duration-200 hover:text-gray-900"
          ></i>
        </button>

        {/* Navigation links */}
        <ul
          className="flex flex-col p-8 gap-6 font-light text-gray-800 text-lg mt-12"
          style={{ fontFamily: fonts.body }}
        >
          {["home", "gallery", "about", "contact", "location"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  handleScroll(e, id);
                  setNavOpen(false);
                }}
                className="transition-colors hover:text-[#607d82]"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hide scrollbar */}
      <style>{`::-webkit-scrollbar{width:0;height:0;}`}</style>
    </div>
  );
}
