import { usePage } from "../../contexts/PageContext";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import ME from "../../assets/images/me.jpg";
import "./contact.css";

const Contact = () => {
  const page = usePage();

  return (
    <section
      className={`contact--section ${
        page === "Kontakt" ? "visible" : "invisible"
      }`}
    >
      <img src={ME} alt="Das bin ich - Marcel Peda." />
      <SiGmail className="contact--icon gmail" />
      <SiWhatsapp className="contact--icon whatsapp" />
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
