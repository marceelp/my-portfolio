import projects from "./projectdata";
import "./projects.css";

const Projects = ({ activeLink }) => {
  return (
    <section
      id="projects__section"
      className={activeLink === "Projekte" ? "visible" : "invisible"}
    >
      <ul id="projects__menu">
        {projects.map((project) => (
          <li className="projects__item">
            <h4>{project.title}</h4>
            <div className="projects__item-div">
              <p>{project.skills}</p>
              <a href={project.link} className="project__link">
                Seite ansehen
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
