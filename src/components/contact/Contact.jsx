import { SiGmail, SiWhatsapp } from "react-icons/si";
import ME from "../../assets/images/me.jpg";
import "./contact.css";

const Contact = ({ activeLink }) => {
  return (
    <section
      id="contact__section"
      className={activeLink === "Kontakt" ? "visible" : "invisible"}
    >
      <img src={ME} alt="Das bin ich - Marcel Peda." />
      <SiGmail className="contact__icon gmail" />
      <SiWhatsapp className="contact__icon whatsapp" />
      <form action="" method="post">
        <input type="text" name="name" placeholder="Dein Name" />
        <input type="email" name="email" placeholder="Deine Email" />
        <textarea
          name="msg"
          cols="20"
          rows="8"
          placeholder="Was kann ich für dich tun?"
        ></textarea>
        <button onSubmit={() => console.log("Gesendet!")}>Senden</button>
      </form>
    </section>
  );
};

export default Contact;