import { PageProvider } from "./contexts/PageContext";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import CanvasBackground from "./components/canvas/Canvas";

const App = () => {
  return (
    <PageProvider>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Nav />
      <CanvasBackground />
    </PageProvider>
  );
};

export default App;
