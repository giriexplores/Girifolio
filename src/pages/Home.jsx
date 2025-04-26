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
import Projects from "../components/Home/Projects";

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

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
    <div className="w-full overflow-x-clip bg-gray-800">
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
        navHandler={navHandler}
      />
      <FloatingNavbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
        navHandler={navHandler}
      />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      {visible && (
        <div className="fixed right-[5%] bottom-[15%] flex flex-col gap-4">
          <BackToTop />
          <DownloadCv fixed={true} />
        </div>
      )}
    </div>
  );
}

export default Home;
