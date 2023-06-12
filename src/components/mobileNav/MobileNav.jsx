import { usePageSwitch } from "../../contexts/PageContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import links from "../nav/links";
import "./mobileNav.css";

const MobileNav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="mobile--nav">
      <div
        className={`menu-btn ${isClicked ? "active" : ""}`}
        onClick={handleClick}
      >
        <div className={`line-top ${isClicked ? "active" : ""}`}></div>
        <div className={`line-center ${isClicked ? "active" : ""}`}></div>
        <div className={`line-bottom ${isClicked ? "active" : ""}`}></div>
      </div>

      <ul className="mobile--menu">
        {links.map((link, i) => (
          <li
            onClick={() => usePageSwitch(link.name)}
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

export default MobileNav;
