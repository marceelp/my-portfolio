import { useState, useRef } from "react";
import { usePage } from "../../contexts/PageContext";
import emailjs from "@emailjs/browser";
import ME from "../../assets/images/me.jpg";
import "./contact.css";

const Contact = () => {
  const page = usePage();
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    const timestamp = new Date().getTime();
    const templateParams = {
      from_name: form.name,
      to_name: "Marcel",
      from_email: form.email,
      to_email: "marcelpedaa@googlemail.com",
      message: form.message,
    };

    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zyak3me",
        "template_ib7g8tr",
        templateParams,
        "glEtsZ0U0gnkXXygl",
        { timestamp }
      )
      .then(
        () => {
          setLoading(false);
          alert("Danke! Ich melde mich so schnell wie möglich!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Irgendwas ist schief gelaufen. Bitte versuch es nochmal!");
        }
      );
  };

  return (
    <section
      className={`contact--section ${
        page === "Kontakt" ? "visible" : "invisible"
      }`}
    >
      <img src={ME} alt="Das bin ich - Marcel Peda." />
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Dein Name"
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Deine Email"
          onChange={handleChange}
          value={form.email}
          required
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Was kann ich für dich tun?"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button onSubmit={() => console.log("Gesendet!")}>
          {loading ? "Sendet..." : "Senden"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
