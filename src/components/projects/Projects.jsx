import { usePage } from "../../contexts/PageContext";
import projects from "./projectdata";
import "./projects.css";

const Projects = () => {
  const page = usePage();

  return (
    <section
      className={`projects--section ${
        page === "Projekte" ? "visible" : "invisible"
      }`}
    >
      <ul className="projects--menu">
        {projects.map((project, index) => (
          <li className="project" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <small className="project-skills">{project.skills}</small>
            <p className="project-description">{project.description}</p>
            <a href={project.github} className="project-a">
              <span className="project-link">Github</span>
            </a>
            <a href={project.live} className="project-link">
              <span>Seite ansehen</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
