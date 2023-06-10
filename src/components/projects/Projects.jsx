import { useState, useEffect } from "react";
import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import projects from "./projectdata";
import "./projects.css";

const Projects = () => {
  const page = usePage();
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentTitle, setCurrentTitle] = useTextAnimation("");
  const [currentSkills, setCurrentSkills] = useTextAnimation("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedProject((prevProject) => (prevProject + 1) % projects.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTitle(projects[selectedProject].title);
    setCurrentSkills(projects[selectedProject].skills);
  }, [selectedProject]);

  return (
    <section
      className={`projects--section ${
        page === "Projekte" ? "visible" : "invisible"
      }`}
    >
      <div className="projects--nums">
        {projects.map((project, i) => (
          <p key={i} onClick={() => setSelectedProject(i)}>
            {i + 1}
          </p>
        ))}
      </div>
      <ul className="projects--menu">
        {projects.map((project, i) => (
          <li
            key={i}
            className="project"
            style={{ display: selectedProject === i ? "block" : "none" }}
          >
            <h2 className="project-title">
              {i === selectedProject ? currentTitle : project.title}
            </h2>

            <div className="project-details">
              <p className="project-description">{project.description}</p>

              <small className="project-skills">
                {i === selectedProject ? currentSkills : project.skills}
              </small>

              <a href={project.github} className="project-link">
                Github
              </a>

              <a href={project.live} className="project-link">
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
