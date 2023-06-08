import "./skills.css";

const Skills = ({ activeLink }) => {
  return (
    <section
      className={`skills--section ${
        activeLink === "Skills" ? "visible" : "invisible"
      }`}
    >
      <div>Skills</div>
    </section>
  );
};

export default Skills;
