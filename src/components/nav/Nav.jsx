import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePage, usePageSwitch } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import links from "./links";
import "./nav.css";

const Nav = () => {
  const page = usePage();
  const pageSwitch = usePageSwitch();
  const [title, updateTitle] = useTextAnimation(page);

  useEffect(() => {
    updateTitle(page);
  }, [page]);

  return (
    <nav className="nav--section">
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
    </nav>
  );
};

export default Nav;
