import "./projects.css";

const Projects = ({ activeLink }) => {
  return (
    <section
      id="projects__section"
      className={activeLink === "Kontakt" ? "visible" : "invisible"}
    >
      <div>Projects</div>
    </section>
  );
};

export default Projects;
