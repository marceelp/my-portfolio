import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LOGO from "../../assets/images/logo.png";
import "./header.css";

function Header() {
  return (
    <header>
      <img src={LOGO} alt="Marcel Peda Logo" className="nav--logo" />
      <div>
        <a
          href="mailto:marcelpedaa@googlemail.com"
          alt="Mail an Marcel Peda"
          target="_blank"
        >
          <SiGmail className="nav--icon nav--icon-one" />
        </a>
        <a
          href="https://github.com/marceelp"
          alt="Github Marcel Peda"
          target="_blank"
        >
          <FaGithub className="nav--icon nav--icon-two" />
        </a>
        <a
          href="https://instagram.com/marceelp"
          alt="Instagram Marcel Peda"
          target="_blank"
        >
          <FaInstagram className="nav--icon nav--icon-three" />
        </a>
      </div>
    </header>
  );
}

export default Header;
