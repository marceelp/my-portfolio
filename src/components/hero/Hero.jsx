import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import "./hero.css";

const Hero = () => {
  const page = usePage();
  const heading = useTextAnimation("Willkommen.", 4200);

  return (
    <section
      className={`hero--section ${page === "Home" ? "visible" : "invisible"}`}
    >
      <article className="hero--description">
        <h1>{heading}</h1>
        <p>
          Mein Name ist <span>Marcel Peda</span>. Ich bin ein 26 Jahre alter,
          leidenschaftlicher Full-Stack-Developer aus Hamburg.
          <br />
          <br />
          Obwohl ich erst seit kurzem programmiere, greife ich bereits auf
          umfangreiche Kenntnisse in HTML-, CSS- und JavaScript zurück.
          <br />
          <br />
          Mein Fokus und meine Stärke liegen auf modernen User Interfaces und
          intuitiv gestalteten User Experiences.
        </p>
      </article>
    </section>
  );
};

export default Hero;
