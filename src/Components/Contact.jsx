import React, { useEffect, useRef, useState } from "react";
import "../css/Contact.scss";
import "../css/Loaders.scss";
import emailjs from "@emailjs/browser";
import { Socmed } from "./getData";
import { toast } from "react-toastify";
function Contact({ darkModes }) {
  const dataSocmed = Socmed;
  const [from_name, setNama] = useState("");
  const [from_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  async function handlerSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      if (response.status === 200) {
        toast.success("Send Message Success 😊", {
          autoClose: 1000,
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setNama("");
      setMessage("");
      setLoading(false);
    }
  }

  return (
    <section className="Container-Aside" id="kontak">
      <header className="Judul-Aside">
        <h1 className={`${darkModes ? "DarkFonts" : ""}`}>Contact</h1>
      </header>
      <article className="Form-Aside">
        <div className={`Text-Aside ${darkModes ? "DarkFonts" : ""}`}>
          <p>Send us a Message!</p>
          <p>
            Hello, do you have a{" "}
            <strong className={`${darkModes ? "DarkFont" : ""}`}>
              question
            </strong>{" "}
            for me?
          </p>
        </div>
        <form ref={ref} onSubmit={handlerSubmit} className="Form">
          <div className="inputName">
            <input
              type="text"
              placeholder="name"
              value={from_name}
              name="from_name"
              required
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="inputEmail">
            <input
              type="email"
              placeholder="email"
              value={from_email}
              name="from_email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputMessage">
            <textarea
              required
              name="message"
              style={{ resize: "none" }}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="buttonSubmit">
            <button type="submit" disabled={!loading ? false : true}>
              {!loading ? "Submit" : <span className="loader"></span>}
            </button>
          </div>
        </form>
      </article>
      <article className="Socmed-Aside">
        <header className={`Judul-Socmed ${darkModes ? "DarkFonts" : ""}`}>
          <h1>
            Let's{" "}
            <strong className={`${darkModes ? "DarkFont" : ""}`}>Talk!</strong>
          </h1>
        </header>
        <div className="List-MySocmed">
          <ul className="Container-List-MySocmed">
            {dataSocmed.map((socmed, index) => {
              return (
                <li className="MySocmed" key={index}>
                  <a href={socmed.LinkWeb} target="_blank">
                    <figure className="Image-MySocmed">
                      <img
                        src={socmed.ImageWeb}
                        alt=""
                        className={`${darkModes ? "DarkIcon" : ""}`}
                      />
                    </figure>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Contact;
