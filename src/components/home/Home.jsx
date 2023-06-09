import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import "./home.css";

const Home = () => {
  const page = usePage();
  const heading = useTextAnimation("Willkommen.", 4200);

  return (
    <section
      className={`home--section ${
        page === "Home" || page === "" ? "visible" : "invisible"
      }`}
    >
      <h1>{heading}</h1>
      <p>
        Mein Name ist <span>Marcel Peda</span>. Ich bin ein 26 Jahre junger,
        leidenschaftlicher Full-Stack-Developer aus Hamburg.
        <br />
        <br />
        Ich besitze umfangreiche Kenntnisse in HTML, CSS und JavaScript,
        besonders React.js und Node.js, und mein Fokus liegt auf modernen User
        Interfaces und intuitiv gestalteten User Experiences.
      </p>
    </section>
  );
};

export default Home;
