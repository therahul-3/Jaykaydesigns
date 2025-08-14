import React from "react";
const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif"
}

export default function Footer({ handleScroll }) {
  return (
    <footer
      className="pt-6 pb-4 px-4 bg-gradient-to-r from-[#5f7c81] to-[#607d82] text-white rounded-t-3xl shadow-lg text-xs max-w-7xl mx-auto flex flex-wrap justify-between"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Responsive vertical stack of navs and links on mobile */}
      <div className="w-full flex flex-col sm:flex-row sm:items-start">
        {/* Left: Logo & vertical nav below */}
        <div className="flex flex-col items-start min-w-[130px] gap-1 pb-2 flex-shrink-0">
          <span className="text-lg font-light">JayKay Designs</span>
          <nav className="flex flex-col gap-1 text-xs mb-2 mt-1">
            {[
              { label: "Home", icon: "fa-home" },
              { label: "Gallery", icon: "fa-images" },
              { label: "About", icon: "fa-info-circle" },
              { label: "Contact", icon: "fa-envelope" },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-gray-300 flex items-center gap-2 transition cursor-pointer"
                onClick={(e) => handleScroll(e, label.toLowerCase())}
                aria-label={label}
              >
                <i className={`fas ${icon} text-sm`} />
                <span>{label}</span>
              </a>
            ))}
            {/* Contact links, stacked below navs in mobile */}
            <div className="flex flex-col gap-1 mt-2 sm:hidden">
              <a
                href="tel:+919500976049"
                className="hover:text-gray-300 flex items-center gap-1 transition"
                aria-label="Call"
              >
                <i className="fas fa-phone text-sm"></i>
                <span>+91 9500976049</span>
              </a>
              <a
                href="mailto:jaykaydesigns1212@gmail.com"
                className="hover:text-gray-300 flex items-center gap-1 transition"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-sm"></i>
                <span>jaykaydesigns1212@gmail.com</span>
              </a>
              <div className="flex gap-2 mt-1">
                <a
                  href="https://www.instagram.com/jaykaydesigns1212/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gray-300"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                {/* <a
                  href="https://www.facebook.com/jaykaydesigns/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/jaykaydesigns/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-sm"></i>
                </a> */}
                <a
                href="https://wa.me/+919789269677"
                target="_blank"
                rel="noopener"
                className="hover:text-gray-300 flex items-center gap-2"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-sm"></i>
                {/* <span>+91 9789269677</span> */}
              </a>
              </div>
            </div>
          </nav>
        </div>
        {/* Desktop right: contact info and socials */}
        <div className="hidden sm:flex flex-col items-end gap-2 min-w-[175px] pb-2 ml-auto">
          <div className="flex gap-2" aria-label="Contact information">
            <a
              href="tel:+919500976049"
              className="hover:text-gray-300 transition"
              aria-label="Call"
            >
              <i className="fas fa-phone text-sm"></i>
            </a>
            <a
              href="mailto:jaykaydesigns1212@gmail.com"
              className="hover:text-gray-300 transition"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-sm"></i>
            </a>
            <a
              href="https://www.instagram.com/jaykaydesigns1212/"
              target="_blank"
              rel="noopener"
              className="hover:text-gray-300 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-sm"></i>
            </a>
            {/* <a
              href="https://www.facebook.com/jaykaydesigns/"
              target="_blank"
              rel="noopener"
              className="hover:text-gray-300 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-sm"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/jaykaydesigns/"
              target="_blank"
              rel="noopener"
              className="hover:text-gray-300 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-sm"></i>
            </a> */}
             <a
                href="https://wa.me/+919789269677"
                target="_blank"
                rel="noopener"
                className="hover:text-gray-300 flex items-center gap-2"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-sm"></i>
                {/* <span>+91 9789269677</span> */}
              </a>
          </div>
          <span className="opacity-80 text-xs">+91 9500976049</span>
          <span className="opacity-80 text-xs">jaykaydesigns1212@gmail.com</span>
        </div>
      </div>
      {/* Copyright always centered */}
      <div className="w-full flex justify-center mt-2 sm:mt-0">
        <span className="opacity-80 text-xs">
          &copy; 2025 JayKay Designs. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
