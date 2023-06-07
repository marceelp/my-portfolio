import { useEffect, useState } from "react";
import preloaderAnimation from "./animations/preloaderAnimation";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const switchPage = (activeLinkName) => {
    setActiveLink(activeLinkName);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      preloaderAnimation();
    }, 4500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Preloader />
      <div id="page">
        <Header />
        <Hero activeLink={activeLink} />
        <Skills activeLink={activeLink} />
        <Projects activeLink={activeLink} />
        <Contact activeLink={activeLink} />
        <Main activeLink={activeLink} switchPage={switchPage} />
      </div>
    </>
  );
};

export default App;
