import React from "react";
const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Open Sans', sans-serif"
}

export default function Contact({ handleWhatsAppSubmit, nameRef, emailRef, msgRef }) {
  const primary = "#607d82";

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 mb-20">
      <h2 className="text-4xl font-light text-center mb-8" style={{ color: primary ,fontFamily: fonts.heading  }}>
        Contact Us
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleWhatsAppSubmit}>
        <input ref={nameRef} className="p-3 border rounded-lg" type="text" placeholder="Your Name" required />
        <input ref={emailRef} className="p-3 border rounded-lg" type="email" placeholder="Your Email" required />
        <textarea ref={msgRef} className="p-3 border rounded-lg" rows="4" placeholder="Your Message" required />
        <button type="submit" className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#607d82] to-[#89a0a3] hover:scale-105">
          <i className="fab fa-whatsapp mr-2"></i>Send via WhatsApp
        </button>
      </form>
    </section>
  );
}
