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
      <h3>{title}</h3>
      <ul className="nav--menu">
        {links.map((link, i) => (
          <li
            onClick={() => pageSwitch(link.name)}
            className="nav--link"
            key={i}
          >
            <Link to={link.path} className={page === link.name ? "active" : ""}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <small className="copyright">&copy;{footer}</small>
    </main>
  );
};

export default Main;
