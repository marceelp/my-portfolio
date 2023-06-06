import { FaGithub, FaInstagram, FaSlack } from "react-icons/fa";
import LOGO from "../../assets/images/logo.png";
import "./header.css";

function Header() {
  return (
    <header>
      <img src={LOGO} alt="Marcel Peda Logo" id="nav__logo" />
      <div>
        <a href="https://github.com/marceelp">
          <FaGithub className="nav__icon nav__icon-one" />
        </a>
        <a href="https://instagram.com/marceelp">
          <FaInstagram className="nav__icon nav__icon-two" />
        </a>
        <a href="#">
          <FaSlack className="nav__icon nav__icon-three" />
        </a>
      </div>
    </header>
  );
}

export default Header;
