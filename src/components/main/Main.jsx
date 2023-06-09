import { useEffect } from "react";
import { usePage, usePageSwitch } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import "./main.css";

const Main = () => {
  const page = usePage();
  const pageSwitch = usePageSwitch();
  const [title, updateTitle] = useTextAnimation(page);
  const [footer] = useTextAnimation("2023 Marcel Peda.", 4200);
  const links = ["Home", "Skills", "Projekte", "Kontakt"];

  useEffect(() => {
    updateTitle(page);
  }, [page]);

  return (
    <main id="main__section">
      <div id="menu">
        <h3>{title}</h3>
        <ul>
          {links.map((link, index) => (
            <li
              onClick={() => pageSwitch(link)}
              className={page === link ? "active" : ""}
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      <div id="line__top-horizontal"></div>
      <div id="line__top-vertical"></div>
      <div id="line__bottom-horizontal"></div>
      <div id="line__bottom-vertical"></div>

      <small id="copyright">&copy;{footer}</small>
    </main>
  );
};

export default Main;
