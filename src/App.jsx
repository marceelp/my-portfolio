import { gsap } from "gsap";
import { useEffect, useState } from "react";
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
      gsap.to("#preloader-text", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.querySelector("#page").style.display = "block";
          gsap.to("#preloader", {
            opacity: 0,
            duration: 3,
            onComplete: () => {
              document.querySelector("#preloader").style.display = "none";
            },
          });
        },
      });
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
