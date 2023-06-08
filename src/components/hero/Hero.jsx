import useTextAnimation from "../../animations/useTextAnimation";
import "./hero.css";

const Hero = ({ activeLink }) => {
  const heading = useTextAnimation("Willkommen.", 4200);

  return (
    <section
      className={`hero--section ${
        activeLink === "Home" ? "visible" : "invisible"
      }`}
    >
      <article className="hero--description">
        <h1>{heading}</h1>
        <p>
          Mein Name ist Marcel Peda.
          <br />
          <br />
          Ich bin ein 26 Jahre junger, leidenschaftlicher Full-Stack-Developer
          aus Hamburg, Deutschland.
          <br />
          <br />
          Ich bin daran interessiert, moderne User Interfaces und intuitiv
          gestaltete User Experiences zu erschaffen.
        </p>
      </article>
    </section>
  );
};

export default Hero;
