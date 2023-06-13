import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageProvider } from "./contexts/PageContext";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/mobileNav/MobileNav";
import Frame from "./components/frame/Frame";
import CanvasBackground from "./components/canvas/Canvas";

const App = () => {
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);

  useEffect(() => {
    const handleResize = () => {
      if (innerWidth <= 768) setMobile(true);
      else setMobile(false);
    };
    handleResize();

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageProvider>
      <main className="wrapper">
        <Preloader />
        <Header
          mobile={mobile}
          isClicked={isClicked}
          handleClick={handleClick}
        />
        <Routes location={location}>
          <Route path="/my-portfolio" element={<Home />} />
          <Route path="/my-portfolio/skills" element={<Skills />} />
          <Route path="/my-portfolio/projekte" element={<Projects />} />
          <Route path="/my-portfolio/kontakt" element={<Contact />} />
        </Routes>
        {!mobile && <Nav />}
        {mobile && isClicked && <MobileNav />}
        <Frame />
        <CanvasBackground />
      </main>
    </PageProvider>
  );
};

export default App;
