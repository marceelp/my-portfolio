import useTextAnimation from "../../helper/useTextAnimation";
import "./hero.css";

const Hero = () => {
  const heading = useTextAnimation("Willkommen.");

  return (
    <section id="hero__section">
      <article id="content">
        <div id="description">
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
            gestaltete User Experiences zu entwickeln.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Hero;
