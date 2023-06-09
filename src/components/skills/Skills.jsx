import { usePage } from "../../contexts/PageContext";
import skills from "./skilldata";
import "./skills.css";

const Skills = () => {
  const page = usePage();

  return (
    <section
      className={`skills--section ${
        page === "Skills" ? "visible" : "invisible"
      }`}
    >
      <div className="skills--grid">
        {skills.map((skill) => (
          <div className="skills--skill">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
