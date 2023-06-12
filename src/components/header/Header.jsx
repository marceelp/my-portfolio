import { useEffect, useState } from "react";
import LOGO from "../../assets/images/logo.png";
import MobileMenuBtn from "./MobileMenuBtn";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./header.css";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleResize = () => {
      if (innerWidth <= 768) setMobile(true);
      else setMobile(false);
    };
    handleResize();

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <img src={LOGO} alt="Marcel Peda Logo" className="header--logo" />

      <div className="header--icons">
        {!mobile && (
          <a
            href="mailto:marcelpedaa@googlemail.com"
            alt="Mail an Marcel Peda"
            target="_blank"
          >
            <SiGmail className="header--icon one" />
          </a>
        )}

        <a
          href="https://github.com/marceelp"
          alt="Github Marcel Peda"
          target="_blank"
        >
          <FaGithub className="header--icon two" />
        </a>

        {!mobile && (
          <a
            href="https://instagram.com/marceelp"
            alt="Instagram Marcel Peda"
            target="_blank"
          >
            <FaInstagram className="header--icon three" />
          </a>
        )}

        {mobile && (
          <MobileMenuBtn isClicked={isClicked} handleClick={handleClick} />
        )}
      </div>
    </header>
  );
}

export default Header;
