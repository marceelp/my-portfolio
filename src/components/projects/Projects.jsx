import "./projects.css";

const Projects = ({ activeLink }) => {
  return (
    <section
      id="projects__section"
      className={activeLink === "Projekte" ? "visible" : "invisible"}
    >
      <ul id="projects__menu">
        <li className="projects__item">
          <h4>Socialmedia-App</h4>
          <p>React / Node / Tailwind</p>
        </li>
        <li className="projects__item">
          <h4>Wetter-App</h4>
          <p>React / Tailwind</p>
        </li>
        <li className="projects__item">
          <h4>Musik-App</h4>
          <p>React / Node / Tailwind</p>
        </li>
        <li className="projects__item">
          <h4>Pacman</h4>
          <p>JavaScript / WebGL</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
