import { useState } from "react";
import useTextAnimation from "./helper/useTextAnimation";

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

  return (
    <>
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
    </>
  );
};

export default App;
