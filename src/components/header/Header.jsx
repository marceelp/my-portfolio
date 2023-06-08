import { FaGithub, FaInstagram, FaSlack } from "react-icons/fa";
import LOGO from "../../assets/images/logo.png";
import "./header.css";

function Header() {
  return (
    <header>
      <img src={LOGO} alt="Marcel Peda Logo" className="nav--logo" />
      <div>
        <a href="https://instagram.com/marceelp">
          <FaInstagram className="nav--icon nav--icon-two" />
        </a>
        <a href="https://github.com/marceelp">
          <FaGithub className="nav--icon nav--icon-one" />
        </a>
        <a href="#">
          <FaSlack className="nav--icon nav--icon-three" />
        </a>
      </div>
    </header>
  );
}

export default Header;
