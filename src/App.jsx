import { useEffect, useState, createContext, useContext } from "react";
import preloaderAnimation from "./animations/preloaderAnimation";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";

const PageContext = createContext();

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");
  // const page = useContext("Home");

  const switchPage = (activeLinkName) => {
    setActiveLink(activeLinkName);
  };

  useEffect(() => {
    const timeout = setTimeout(() => preloaderAnimation(), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <PageContext.Provider value={activeLink}>
        <Preloader />
        <Header />
        <Hero activeLink={activeLink} />
        <Skills activeLink={activeLink} />
        <Projects activeLink={activeLink} />
        <Contact activeLink={activeLink} />
        <Main activeLink={activeLink} switchPage={switchPage} />
      </PageContext.Provider>
    </>
  );
};

export default App;
