import "./mobileNav.css";

const MobileNav = () => {
  return (
    <nav className="mobile--nav">
      <ul className="mobile--nav-links">
        <li>Home</li>
        <li>Skills</li>
        <li>Projekte</li>
        <li>Kontakt</li>
      </ul>
      <div className="mobile--socials">
        <a href="mailto:marcelpedaa@googlemail.com">Gmail</a>
        <a href="https://instagram.com/marceelp">Instagram</a>
      </div>
    </nav>
  );
};

export default MobileNav;
