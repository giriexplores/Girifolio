import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Contact from "../components/Home/Contact";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import DownloadCv from "../components/DownloadCv";

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const navHandler = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 82,
      behavior: "smooth",
    });
  };

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    });
  }, []);

  return (
    <div className="bg-gray-800 w-full overflow-x-clip">
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        navHandler={navHandler}
      />
      <FloatingNavbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        navHandler={navHandler}
      />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      {visible && (
        <div className="flex flex-col gap-4 fixed bottom-[15%] right-[5%]">
          <BackToTop />
          <DownloadCv fixed={true} />
        </div>
      )}
    </div>
  );
}

export default Home;
