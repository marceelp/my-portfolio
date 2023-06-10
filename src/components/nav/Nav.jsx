import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePage, usePageSwitch } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import links from "./links";
import "./nav.css";

const Main = () => {
  const page = usePage();
  const pageSwitch = usePageSwitch();
  const [title, updateTitle] = useTextAnimation(page);
  const [footer] = useTextAnimation("2023 Marcel Peda.", 4200);

  useEffect(() => {
    updateTitle(page);
  }, [page]);

  return (
    <main className="nav--section">
      <div className="line--top-horizontal"></div>
      <div className="line--top-vertical"></div>

      <div className="nav--menu">
        <h3>{title}</h3>
        <ul>
          {links.map((link, i) => (
            <li key={i} onClick={() => pageSwitch(link.name)}>
              <Link
                to={link.path}
                className={`nav--link ${page === link.name ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="line--bottom-horizontal"></div>
      <div className="line--bottom-vertical"></div>

      <small className="copyright">&copy;{footer}</small>
    </main>
  );
};

export default Main;
