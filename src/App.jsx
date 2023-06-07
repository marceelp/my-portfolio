import { useEffect, useState } from "react";
import preloaderAnimation from "./animations/preloaderAnimation";
import useTextAnimation from "./animations/useTextAnimation";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const animatedTitle = useTextAnimation(activeLink);

  const switchPage = (activeLinkName) => {
    setActiveLink(activeLinkName);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      preloaderAnimation();
    }, 2000);
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
        <Main
          switchPage={switchPage}
          animatedTitle={animatedTitle}
          activeLink={activeLink}
        />
      </div>
    </>
  );
};

export default App;
