import useTextAnimation from "../../helper/useTextAnimation";
import links from "./links";
import "./main.css";

const Main = ({ animatedTitle, switchPage, activeLink }) => {
  const animatedFooter = useTextAnimation("2023 Marcel Peda.");

  return (
    <main id="main">
      <div id="menu">
        <h3>{animatedTitle}</h3>
        <ul>
          {links.map((link, index) => (
            <li
              onClick={() => switchPage(link.name)}
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
