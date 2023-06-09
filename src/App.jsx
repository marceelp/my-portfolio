import { PageProvider } from "./contexts/PageContext";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <PageProvider>
        <Preloader />
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Main />
      </PageProvider>
    </>
  );
};

export default App;
