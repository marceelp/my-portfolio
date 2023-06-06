import { useState } from "react";
import useTextAnimation from "../../helper/useTextAnimation";
import links from "./links";
import "./main.css";

const Main = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const animatedTitle = useTextAnimation(activeLink);
  const animatedFooter = useTextAnimation("2023 Marcel Peda.");

  const changePage = (activeLinkName) => {
    setActiveLink(activeLinkName);
  };

  return (
    <main id="main">
      <div id="menu">
        <h3>{animatedTitle}</h3>
        <ul>
          {links.map((link, index) => (
            <li
              onClick={() => changePage(link.name)}
              className={activeLink === link.name ? "active" : ""}
              key={index}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <div id="line__top-horizontal"></div>
      <div id="line__top-vertical"></div>
      <div id="line__bottom-horizontal"></div>
      <div id="line__bottom-vertical"></div>

      <small id="copyright">&copy;{animatedFooter}</small>
    </main>
  );
};

export default Main;
