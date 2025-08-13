
import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";


const primary = "#607d82";
const primaryLight = "#89a0a3";
const gradient = `linear-gradient(90deg, ${primary} 0%, ${primaryLight} 100%)`;
const overlayBg = "rgba(128,166,173,0.90)";
const galleryBg = "#d9e3e5"; // lighter shade for gallery cards

const fonts = {
  heading: "'Playfair Display', serif",  
  body: "'Open Sans', sans-serif",
};

const galleryImages = Array.from({ length: 33 }, (_, i) => ({
  title: `Design Example ${i + 1}`,
  src: `/gallery/img${i + 1}.jpg`,
  desc: "Sample display for modern showroom.",
}));

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  useEffect(() => {
    document.body.style.overflow = navOpen || modalOpen ? "hidden" : "auto";
  }, [navOpen, modalOpen]);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nMessage: ${msgRef.current.value}`
    );
    window.open(`https://wa.me/+919789269677?text=${text}`, "_blank");
  };

  return (
    <>
      <Navbar handleScroll={handleScroll} setNavOpen={setNavOpen} />
      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} handleScroll={handleScroll} />
      <Hero handleScroll={handleScroll} />
      <Gallery galleryImages={galleryImages} setModalOpen={setModalOpen} setCurrentImage={setCurrentImage} />
      <About />
      <Contact handleWhatsAppSubmit={handleWhatsAppSubmit} nameRef={nameRef} emailRef={emailRef} msgRef={msgRef} />
      <MapSection />
      <Footer handleScroll={handleScroll} />
      <Modal modalOpen={modalOpen} currentImage={currentImage} setModalOpen={setModalOpen} />
    </>
  );
}
