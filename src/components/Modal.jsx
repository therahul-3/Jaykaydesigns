
import React from "react";

const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif",
};
const primary = "#607d82";
const overlayBg = "rgba(128,166,173,0.90)";

export default function Modal({ modalOpen, currentImage, setModalOpen }) {
  if (!modalOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: overlayBg }}
      onClick={() => setModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-3xl p-4 sm:p-6 w-full sm:w-[75vw] max-w-5xl shadow-xl relative flex flex-col items-center"
        style={{ minHeight: "400px", justifyContent: "center" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setModalOpen(false)}
          className="
            absolute
            top-2 right-2   
            sm:top-6 sm:right-6    /* desktop position */
            p-1 sm:p-2
            bg-white text-gray-600 
            hover:bg-[#f7f7f7] 
            transition 
            rounded-full
          "
          style={{
            fontSize: "1.2rem", // smaller on mobile
            fontWeight: "300",
            width: "1.8rem",
            height: "1.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close image modal"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Modal image (border radius always) */}
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="
            mb-4 w-full max-h-[75vh] object-contain
            rounded-2xl sm:rounded-3xl
          "
        />

        {/* Title */}
        <h3
          id="modal-title"
          className="text-2xl font-light mt-2 mb-2 text-center"
          style={{ fontFamily: fonts.heading, color: primary }}
        >
          {currentImage.title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 text-sm text-center"
          style={{ fontFamily: fonts.body }}
        >
          {currentImage.desc}
        </p>
      </div>
    </div>
  );
}


