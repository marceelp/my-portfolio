import { usePage } from "../../contexts/PageContext";
import "./skills.css";

const Skills = () => {
  const page = usePage();

  return (
    <section
      className={`skills--section ${
        page === "Skills" ? "visible" : "invisible"
      }`}
    >
      <div>Skills</div>
    </section>
  );
};

export default Skills;
