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
          <li className="projects--project" key={index}>
            <h4 className="projects--project-title">{project.title}</h4>
            <div className="projects--project-div">
              <p>{project.skills}</p>
              <a href={project.link} className="projects--project-link">
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
