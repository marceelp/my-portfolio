import { PageProvider } from "./contexts/PageContext";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <PageProvider>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Nav />
    </PageProvider>
  );
};

export default App;
