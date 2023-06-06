import "./skills.css";

const Skills = ({ activeLink }) => {
  return (
    <section
      id="skills__section"
      className={activeLink === "Skills" ? "visible" : "invisible"}
    >
      <div>Skills</div>
    </section>
  );
};

export default Skills;
